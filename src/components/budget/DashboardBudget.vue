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
const housingTotal = ref(0)
const transportationTotal = ref(0)
const groceriesTotal = ref(0)
const entertainmentTotal = ref(0)
const healthFitnessTotal = ref(0)
const investmentsTotal = ref(0)
const eatingDrinkingOutTotal = ref(0)
const giftsTotal = ref(0)
const otherTotal = ref(0)

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

  housingTotal.value = Number(
    (await DB.getExpensesForMonthYearCategory(currentMonth, currentYear, ExpenseCategory.HOUSING))
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  transportationTotal.value = Number(
    (
      await DB.getExpensesForMonthYearCategory(
        currentMonth,
        currentYear,
        ExpenseCategory.TRANSPORTATION
      )
    )
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  groceriesTotal.value = Number(
    (await DB.getExpensesForMonthYearCategory(currentMonth, currentYear, ExpenseCategory.GROCERIES))
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  entertainmentTotal.value = Number(
    (
      await DB.getExpensesForMonthYearCategory(
        currentMonth,
        currentYear,
        ExpenseCategory.ENTERTAINMENT
      )
    )
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  healthFitnessTotal.value = Number(
    (
      await DB.getExpensesForMonthYearCategory(
        currentMonth,
        currentYear,
        ExpenseCategory.HEALTH_FITNESS
      )
    )
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  investmentsTotal.value = Number(
    (
      await DB.getExpensesForMonthYearCategory(
        currentMonth,
        currentYear,
        ExpenseCategory.INVESTMENTS
      )
    )
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  eatingDrinkingOutTotal.value = Number(
    (
      await DB.getExpensesForMonthYearCategory(
        currentMonth,
        currentYear,
        ExpenseCategory.EATING_DRINKING_OUT
      )
    )
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  giftsTotal.value = Number(
    (await DB.getExpensesForMonthYearCategory(currentMonth, currentYear, ExpenseCategory.GIFTS))
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  otherTotal.value = Number(
    (await DB.getExpensesForMonthYearCategory(currentMonth, currentYear, ExpenseCategory.OTHER))
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )

  chartData.value = getMonthPieChartData(
    housingTotal.value,
    transportationTotal.value,
    groceriesTotal.value,
    entertainmentTotal.value,
    healthFitnessTotal.value,
    investmentsTotal.value,
    eatingDrinkingOutTotal.value,
    giftsTotal.value,
    otherTotal.value
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
        <div v-if="budget - expenses >= 0" class="col text-caption text-right">
          ${{ budget - expenses }} remaining
        </div>
        <div v-else class="col text-caption text-right">
          ${{ Math.abs(budget - expenses) }} over budget
        </div>
      </div>
    </QCardSection>
  </QCard>

  <QCard>
    <QCardSection>
      <p class="text-h6">Expenses</p>

      <div v-if="housingTotal > 0">
        <span>{{ ExpenseCategory.HOUSING }}:</span>
        ${{ Number(housingTotal.toFixed(2)) }}
      </div>
      <div v-if="transportationTotal > 0">
        <span>{{ ExpenseCategory.TRANSPORTATION }}</span>
        ${{ Number(transportationTotal.toFixed(2)) }}
      </div>
      <div v-if="groceriesTotal > 0">
        <span>{{ ExpenseCategory.GROCERIES }}</span>
        ${{ Number(groceriesTotal.toFixed(2)) }}
      </div>
      <div v-if="entertainmentTotal > 0">
        <span>{{ ExpenseCategory.ENTERTAINMENT }}</span>
        ${{ Number(entertainmentTotal.toFixed(2)) }}
      </div>
      <div v-if="healthFitnessTotal > 0">
        <span>{{ ExpenseCategory.HEALTH_FITNESS }}</span>
        ${{ Number(healthFitnessTotal.toFixed(2)) }}
      </div>
      <div v-if="investmentsTotal > 0">
        <span>{{ ExpenseCategory.INVESTMENTS }}</span>
        ${{ Number(investmentsTotal.toFixed(2)) }}
      </div>
      <div v-if="eatingDrinkingOutTotal > 0">
        <span>{{ ExpenseCategory.EATING_DRINKING_OUT }}</span>
        ${{ Number(eatingDrinkingOutTotal.toFixed(2)) }}
      </div>
      <div v-if="giftsTotal > 0">
        <span>{{ ExpenseCategory.GIFTS }}</span>
        ${{ Number(giftsTotal.toFixed(2)) }}
      </div>
      <div v-if="otherTotal > 0">
        <span>{{ ExpenseCategory.OTHER }}</span>
        ${{ Number(otherTotal.toFixed(2)) }}
      </div>

      <Pie
        :data="chartData"
        :options="getMonthPieChartOptions()"
        style="max-height: 600px"
        class="q-mt-md"
      />
    </QCardSection>
  </QCard>
</template>
