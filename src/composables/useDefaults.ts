import { Icon } from '@/types/general'
import { uid } from 'quasar'
import { ExpenseCategory, Expense } from '@/models/Expense'
import useLogger from '@/composables/useLogger'
import useDialogs from '@/composables/useDialogs'
import DB from '@/services/Database'

export default function useDefaults() {
  const { log } = useLogger()
  const { confirmDialog } = useDialogs()

  function randomExpenseCategory() {
    const categories = Object.values(ExpenseCategory)
    return categories[Math.floor(Math.random() * categories.length)]
  }

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function onDemostrationExpenses() {
    confirmDialog(
      'Load Demostration Expenses',
      `Would you like the load demostration Expenses into the database?`,
      Icon.INFO,
      'info',
      async () => {
        try {
          const expenses: Expense[] = []

          const buildExpenses = (count: number) => {
            for (let i = 0; i < count; i++) {
              const dollars = randomNumber(3, 90)
              const cents = randomNumber(0, 99)
              const total = Number(`${dollars}.${cents}`)

              expenses.push(
                new Expense({
                  id: uid(),
                  createdTimestamp: Date.now(),
                  category: randomExpenseCategory(),
                  desc: `Expense description ${i}`,
                  amount: Number(total.toFixed(2)),
                })
              )
            }
          }

          buildExpenses(15)

          await DB.importExpenses(expenses)

          log.info('Demostration expenses loaded')
        } catch (error) {
          log.error('Failed to load demostration data', error)
        }
      }
    )
  }

  return { onDemostrationExpenses }
}
