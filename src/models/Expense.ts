import { DBField, type InspectionItem } from '@/types/database'
import { Limit } from '@/types/general'
import { getDisplayDate, truncateString } from '@/utils/common'
import { uid, type QTableColumn } from 'quasar'
import { defineAsyncComponent } from 'vue'
import { z } from 'zod'

export enum ExpenseCategory {
  HOUSING = 'Housing',
  TRANSPORTATION = 'Transportation',
  EDUCATION = 'Education',
  GROCERIES = 'Groceries',
  ENTERTAINMENT = 'Entertainment',
  HEALTH_FITNESS = 'Health & Fitness',
  INVESTMENTS = 'Investments',
  EATING_DRINKING_OUT = 'Eating & Drinking Out',
  GIFTS = 'Gifts',
  OTHER = 'Other',
}

export const categorySchema = z.nativeEnum(ExpenseCategory)

export const budgetSchema = z.number().positive().int()

export const idSchema = z.string().uuid()
export const createdTimestampSchema = z.number().int()
export const textAreaSchema = z.string().max(Limit.MAX_TEXT_AREA).trim()
export const amountSchema = z.number().min(Number.MIN_SAFE_INTEGER).max(Number.MAX_SAFE_INTEGER)

export const expenseSchema = z.object({
  [DBField.ID]: idSchema,
  [DBField.CREATED_TIMESTAMP]: createdTimestampSchema,
  [DBField.CATEGORY]: categorySchema,
  [DBField.DESC]: textAreaSchema,
  [DBField.AMOUNT]: amountSchema,
})

const partialExpenseSchema = expenseSchema.deepPartial()
type ExpenseParams = z.infer<typeof partialExpenseSchema>

export class Expense {
  [DBField.ID]?: string;
  [DBField.CREATED_TIMESTAMP]?: number;
  [DBField.CATEGORY]?: ExpenseCategory;
  [DBField.DESC]?: string;
  [DBField.AMOUNT]?: number

  constructor({ id, createdTimestamp, category, desc, amount }: ExpenseParams) {
    this.id = id
    this.createdTimestamp = createdTimestamp
    this.category = category
    this.desc = desc
    this.amount = amount
  }

  static getDefaultRecord(): Expense {
    return new Expense({
      id: uid(),
      createdTimestamp: Date.now(),
      category: undefined,
      desc: '',
      amount: undefined,
    })
  }

  static getFieldComponents(): ReturnType<typeof defineAsyncComponent>[] {
    return [
      defineAsyncComponent(() => import('@/components/fields/FieldExpenseCategory.vue')),
      defineAsyncComponent(() => import('@/components/fields/FieldAmount.vue')),
      defineAsyncComponent(() => import('@/components/fields/FieldDesc.vue')),
      defineAsyncComponent(() => import('@/components/fields/FieldCreatedTimestamp.vue')),
    ]
  }

  static getInspectionItems(): InspectionItem[] {
    return [
      {
        field: DBField.ID,
        label: 'Id',
        output: 'single',
        format: (val: string) => `${val || '-'}`,
      },
      {
        field: DBField.CREATED_TIMESTAMP,
        label: 'Created Date',
        output: 'single',
        format: (val: number) => getDisplayDate(val) || '-',
      },
      {
        field: DBField.CATEGORY,
        label: 'Category',
        output: 'single',
        format: (val: ExpenseCategory) => `${val || '-'}`,
      },
      {
        field: DBField.DESC,
        label: 'Description',
        output: 'single',
        format: (val: string) => `${val || '-'}`,
      },
      {
        field: DBField.AMOUNT,
        label: 'Amount',
        output: 'single',
        format: (val: number | undefined) => (val ? `$${val.toFixed(2)}` : '-'),
      },
    ]
  }

  static getTableColumns(): QTableColumn[] {
    return [
      {
        name: 'hiddenId', // Needed in QTable row props
        label: '',
        align: 'left',
        sortable: false,
        required: true,
        field: (row: any) => row[DBField.ID],
        format: (val: string) => `${val}`,
        style: 'display: none', // Hide column in QTable
      },
      {
        name: DBField.ID,
        label: 'Id*',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[DBField.ID],
        format: (val: string) => truncateString(val, 8, '*'),
      },
      {
        name: DBField.CREATED_TIMESTAMP,
        label: 'Created Date',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[DBField.CREATED_TIMESTAMP],
        format: (val: number) => getDisplayDate(val),
      },
      {
        name: DBField.CATEGORY,
        label: 'Category',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[DBField.CATEGORY],
        format: (val: ExpenseCategory) => `${val || '-'}`,
      },
      {
        name: DBField.DESC,
        label: 'Description',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[DBField.DESC],
        format: (val: string) => truncateString(val, 50, '...'),
      },
      {
        name: DBField.AMOUNT,
        label: 'Amount',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[DBField.AMOUNT],
        format: (val: number | undefined) => (val ? `$${val.toFixed(2)}` : ''),
      },
    ]
  }
}
