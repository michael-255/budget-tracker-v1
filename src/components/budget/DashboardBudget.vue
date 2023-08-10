<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { SettingKey } from '@/models/Setting'
import { Pie } from 'vue-chartjs'
import { colors } from 'quasar'
import { ExpenseCategory } from '@/models/Expense'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, ArcElement } from 'chart.js'
import DB from '@/services/Database'
import useCharting from '@/composables/useCharting'

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement)
const { getPaletteColor } = colors

const { getMonthPieChartOptions, getMonthPieChartData } = useCharting()

const budget: Ref<number> = ref(0)
const expenses = ref(0)
const percentage = ref(0)
const color = ref('grey')
const label = ref('No Budget')
const chartData: Ref<{
  labels: any[]
  datasets: any[]
}> = ref({
  labels: [],
  datasets: [],
})

onMounted(async () => {
  budget.value = (await DB.getSettingValue(SettingKey.BUDGET_TARGET)) ?? 0

  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  const currentMonthExpenses = await DB.getExpensesForMonthAndYear(currentMonth, currentYear)

  expenses.value = Number(
    currentMonthExpenses
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )

  // TODO - Get total expenses for each category
  // TODO - Get percentage of budget for each category
  // TODO - Get percentage of bugdet used

  chartData.value = getMonthPieChartData(
    Number(
      (await DB.getExpensesForMonthYearCategory(currentMonth, currentYear, ExpenseCategory.HOUSING))
        .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
        .toFixed(2)
    ),
    Number(
      (
        await DB.getExpensesForMonthYearCategory(
          currentMonth,
          currentYear,
          ExpenseCategory.TRANSPORTATION
        )
      )
        .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
        .toFixed(2)
    ),
    Number(
      (
        await DB.getExpensesForMonthYearCategory(
          currentMonth,
          currentYear,
          ExpenseCategory.GROCERIES
        )
      )
        .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
        .toFixed(2)
    ),
    Number(
      (
        await DB.getExpensesForMonthYearCategory(
          currentMonth,
          currentYear,
          ExpenseCategory.ENTERTAINMENT
        )
      )
        .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
        .toFixed(2)
    ),
    Number(
      (
        await DB.getExpensesForMonthYearCategory(
          currentMonth,
          currentYear,
          ExpenseCategory.HEALTH_FITNESS
        )
      )
        .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
        .toFixed(2)
    ),
    Number(
      (
        await DB.getExpensesForMonthYearCategory(
          currentMonth,
          currentYear,
          ExpenseCategory.INVESTMENTS
        )
      )
        .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
        .toFixed(2)
    ),
    Number(
      (
        await DB.getExpensesForMonthYearCategory(
          currentMonth,
          currentYear,
          ExpenseCategory.EATING_DRINKING_OUT
        )
      )
        .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
        .toFixed(2)
    ),
    Number(
      (await DB.getExpensesForMonthYearCategory(currentMonth, currentYear, ExpenseCategory.GIFTS))
        .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
        .toFixed(2)
    ),
    Number(
      (await DB.getExpensesForMonthYearCategory(currentMonth, currentYear, ExpenseCategory.OTHER))
        .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
        .toFixed(2)
    )
  )

  if (budget.value) {
    percentage.value = Number(((expenses.value / budget.value) * 100).toFixed(0))

    label.value = `${percentage.value}%`

    if (percentage.value < 80) {
      color.value = 'positive'
    } else if (percentage.value < 100) {
      color.value = 'warning'
    } else {
      color.value = 'negative'
    }
  }
})
</script>

<template>
  <QCard class="q-mb-md">
    <QCardSection>
      <p class="text-h6">Budget</p>

      <div class="row justify-between">
        <div class="col text-body2 text-weight-bold">Current Month</div>
        <div class="col text-body2 text-right">${{ budget }} Budgeted</div>
      </div>

      <QSlider
        class="q-mt-xs"
        v-model="expenses"
        readonly
        :min="0"
        :max="budget"
        :color="color"
        :selection-color="color"
        track-size="10px"
        thumb-size="0px"
      />

      <div class="row justify-between">
        <div class="col text-caption">${{ expenses }} spent</div>
        <div class="col text-caption text-right">${{ budget - expenses }} remaining</div>
      </div>
    </QCardSection>
  </QCard>

  <QCard>
    <QCardSection>
      <p class="text-h6">Expenses</p>

      <Pie :data="chartData" :options="getMonthPieChartOptions()" style="max-height: 600px" />
    </QCardSection>
  </QCard>
</template>
