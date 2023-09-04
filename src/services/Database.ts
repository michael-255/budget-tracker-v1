import Dexie, { liveQuery, type Table } from 'dexie'
import { Dark } from 'quasar'
import { Duration } from '@/types/general'
import { AppDatabaseVersion, AppName } from '@/constants/global'
import { DBTable, DBField, InternalTable, InternalField, type BackupData } from '@/types/database'
import { Setting, SettingKey, settingSchema, type SettingValue } from '@/models/Setting'
import { Log, LogLevel, logSchema, type LogDetails } from '@/models/Log'
import { Expense, ExpenseCategory, expenseSchema } from '@/models/Expense'

class Database extends Dexie {
  // Required for easier TypeScript usage
  [InternalTable.SETTINGS]!: Table<Setting>;
  [InternalTable.LOGS]!: Table<Log>;
  [DBTable.EXPENSES]!: Table<Expense>

  constructor(name: string) {
    super(name)

    this.version(1).stores({
      [InternalTable.SETTINGS]: `&${InternalField.KEY}`,
      [InternalTable.LOGS]: `++${InternalField.AUTO_ID}`,
      [DBTable.EXPENSES]: `&${DBField.ID}, ${DBField.CREATED_TIMESTAMP}, ${DBField.CATEGORY}`,
    })

    // Required
    this[InternalTable.SETTINGS].mapToClass(Setting)
    this[InternalTable.LOGS].mapToClass(Log)
    this[DBTable.EXPENSES].mapToClass(Expense)
  }

  /////////////////////////////////////////////////////////////////////////////
  //                                                                         //
  //     Settings (internal)                                                 //
  //                                                                         //
  /////////////////////////////////////////////////////////////////////////////

  async getSetting(key: SettingKey) {
    return await this.table(InternalTable.SETTINGS).get(key)
  }

  async getSettingValue(key: SettingKey) {
    return (await this.table(InternalTable.SETTINGS).get(key))?.value
  }

  async initSettings() {
    const defaultSettings: Readonly<{
      [key in SettingKey]: SettingValue
    }> = {
      [SettingKey.BUDGET_TARGET]: undefined,
      [SettingKey.WELCOME_OVERLAY]: true,
      [SettingKey.DASHBOARD_DESCRIPTIONS]: true,
      [SettingKey.DARK_MODE]: true,
      [SettingKey.CONSOLE_LOGS]: false,
      [SettingKey.INFO_MESSAGES]: true,
      [SettingKey.LOG_RETENTION_DURATION]: Duration['Three Months'],
    }

    const keys = Object.values(SettingKey)

    const settings = await Promise.all(
      keys.map(async (key) => {
        const setting = await this.table(InternalTable.SETTINGS).get(key)

        if (setting) {
          return setting
        } else {
          return { key, value: defaultSettings[key] }
        }
      })
    )

    Dark.set(Boolean(settings.find((s) => s.key === SettingKey.DARK_MODE)?.value))

    await Promise.all(settings.map((s) => this.setSetting(s.key, s.value)))
  }

  async setSetting(key: SettingKey, value: SettingValue) {
    if (key === SettingKey.DARK_MODE) {
      Dark.set(Boolean(value))
    }
    return await this.table(InternalTable.SETTINGS).put(settingSchema.parse({ key, value }))
  }

  /////////////////////////////////////////////////////////////////////////////
  //                                                                         //
  //     Logs (internal)                                                     //
  //                                                                         //
  /////////////////////////////////////////////////////////////////////////////

  async getLog(autoId: number) {
    return await this.table(InternalTable.LOGS).get(autoId)
  }

  async addLog(logLevel: LogLevel, logLabel: string, details?: LogDetails) {
    const log = new Log(logLevel, logLabel, details)
    return await this.table(InternalTable.LOGS).add(logSchema.parse(log))
  }

  async purgeLogs() {
    const logDuration = (
      await this.table(InternalTable.SETTINGS).get(SettingKey.LOG_RETENTION_DURATION)
    )?.value as Duration

    if (!logDuration || logDuration === Duration.Forever) {
      return 0 // No logs purged
    }

    const logs = await this.table(InternalTable.LOGS).toArray()

    // Find Logs that are older than the retention time and map them to their keys
    const removableLogs = logs
      .filter((log: Log) => {
        const logTimestamp = log.timestamp ?? 0
        const logAge = Date.now() - logTimestamp
        return logAge > logDuration
      })
      .map((log: Log) => log.autoId) // Map remaining Log ids for removal

    await this.table(InternalTable.LOGS).bulkDelete(removableLogs)

    return removableLogs.length // Number of logs deleted
  }

  /////////////////////////////////////////////////////////////////////////////
  //                                                                         //
  //     Live Queries                                                        //
  //                                                                         //
  /////////////////////////////////////////////////////////////////////////////

  liveSettings() {
    return liveQuery(async () => await this.table(InternalTable.SETTINGS).toArray())
  }

  liveLogs() {
    return liveQuery(
      async () =>
        await this.table(InternalTable.LOGS).orderBy(InternalField.AUTO_ID).reverse().toArray()
    )
  }

  liveExpenses() {
    return liveQuery(
      async () =>
        await this.table(DBTable.EXPENSES).orderBy(DBField.CREATED_TIMESTAMP).reverse().toArray()
    )
  }

  /////////////////////////////////////////////////////////////////////////////
  //                                                                         //
  //     Gets                                                                //
  //                                                                         //
  /////////////////////////////////////////////////////////////////////////////

  async getExpense(id: string): Promise<Expense | undefined> {
    return await this.table(DBTable.EXPENSES).get(id)
  }

  async getAllExpenses(): Promise<Expense[]> {
    return await this.table(DBTable.EXPENSES).toArray()
  }

  async getExpensesForMonthAndYear(month: number, year: number): Promise<Expense[]> {
    const start = new Date(year, month, 1)
    const end = new Date(year, month + 1, 0, 23, 59, 59, 999)

    return await this.table(DBTable.EXPENSES)
      .where(DBField.CREATED_TIMESTAMP)
      .between(start.getTime(), end.getTime())
      .toArray()
  }

  async getExpensesForMonthYearCategory(
    month: number,
    year: number,
    category: string
  ): Promise<Expense[]> {
    const start = new Date(year, month, 1)
    const end = new Date(year, month + 1, 0, 23, 59, 59, 999)

    return await this.table(DBTable.EXPENSES)
      .where(DBField.CREATED_TIMESTAMP)
      .between(start.getTime(), end.getTime())
      .filter((expense) => expense.category === category)
      .toArray()
  }

  async getExpensesForYearCategory(
    year: number,
    category: ExpenseCategory | 'All Categories'
  ): Promise<Expense[]> {
    const start = new Date(year, 0, 1)
    const end = new Date(year, 11, 31, 23, 59, 59, 999)

    return await this.table(DBTable.EXPENSES)
      .where(DBField.CREATED_TIMESTAMP)
      .between(start.getTime(), end.getTime())
      .filter((expense) => category === 'All Categories' || expense.category === category)
      .toArray()
  }

  async getOldestExpense(): Promise<Expense | undefined> {
    return await this.table(DBTable.EXPENSES).orderBy(DBField.CREATED_TIMESTAMP).first()
  }

  async getBackupData() {
    const backupData: BackupData = {
      appName: AppName,
      databaseVersion: AppDatabaseVersion,
      [DBField.CREATED_TIMESTAMP]: Date.now(),
      [InternalTable.SETTINGS]: await this.table(InternalTable.SETTINGS).toArray(),
      [InternalTable.LOGS]: await this.table(InternalTable.LOGS).toArray(),
      [DBTable.EXPENSES]: await this.getAllExpenses(),
    }

    return backupData
  }

  /////////////////////////////////////////////////////////////////////////////
  //                                                                         //
  //     Creates                                                             //
  //                                                                         //
  /////////////////////////////////////////////////////////////////////////////

  async addExpense(expense: Expense) {
    return await this.table(DBTable.EXPENSES).add(expenseSchema.parse(expense))
  }

  async importExpenses(expenses: Expense[]) {
    const validExpenses: Expense[] = []
    const skippedExpenses: Expense[] = []

    expenses.forEach((r) => {
      if (expenseSchema.safeParse(r).success) {
        validExpenses.push(expenseSchema.parse(r))
      } else {
        skippedExpenses.push(r)
      }
    })

    await this.table(DBTable.EXPENSES).bulkAdd(validExpenses)

    return skippedExpenses
  }

  /////////////////////////////////////////////////////////////////////////////
  //                                                                         //
  //     Updates                                                             //
  //                                                                         //
  /////////////////////////////////////////////////////////////////////////////

  async putExpense(expense: Expense) {
    return await this.table(DBTable.EXPENSES).put(expenseSchema.parse(expense))
  }

  /////////////////////////////////////////////////////////////////////////////
  //                                                                         //
  //     Deletes                                                             //
  //                                                                         //
  /////////////////////////////////////////////////////////////////////////////

  async deleteExpense(id: string) {
    const recordToDelete = await this.getExpense(id)

    if (!recordToDelete) {
      throw new Error(`No record to delete in table ${DBTable.EXPENSES} for id ${id}`)
    }

    return await this.table(DBTable.EXPENSES).delete(id)
  }

  async clearLogs() {
    return await this.table(InternalTable.LOGS).clear()
  }

  async clearSettings() {
    await this.table(InternalTable.SETTINGS).clear()
    return await this.initSettings()
  }

  async clearAll() {
    await Promise.all([
      Object.values(InternalTable).map(async (table) => await this.table(table).clear()),
      Object.values(DBTable).map(async (table) => await this.table(table).clear()),
    ])
    return await this.initSettings()
  }

  /**
   * Deletes entire database. Require app reload to reinitialize the database.
   */
  async deleteDatabase() {
    return await this.delete()
  }
}

/**
 * Use this preconfigured Database instance. Do NOT create another one!
 */
const DB = new Database(`${AppName} v${AppDatabaseVersion}`)

export default DB
