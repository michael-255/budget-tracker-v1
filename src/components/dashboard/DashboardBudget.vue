<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { SettingKey } from '@/models/Setting'
import { Pie } from 'vue-chartjs'
import { ExpenseCategory } from '@/models/Expense'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, ArcElement } from 'chart.js'
import { Icon, Month } from '@/types/general'
import DB from '@/services/Database'
import useCharting from '@/composables/useCharting'

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement)

const { getPieChartOptions, getPieChartData } = useCharting()

const currentMonth = Object.values(Month)[new Date().getMonth()]
const currentYear = new Date().getFullYear()
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
const educationTotal = ref(0)
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
  educationTotal.value = Number(
    (await DB.getExpensesForMonthYearCategory(currentMonth, currentYear, ExpenseCategory.EDUCATION))
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

  chartData.value = getPieChartData(
    housingTotal.value,
    transportationTotal.value,
    educationTotal.value,
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
        <div class="col text-body2 text-weight-bold">{{ currentMonth }} {{ currentYear }}</div>
        <div class="col text-body2 text-right">${{ budget.toFixed(2) }} Budgeted</div>
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
          ${{ (budget - expenses).toFixed(2) }} remaining
        </div>
        <div v-else class="col text-caption text-right">
          ${{ Math.abs(budget - expenses).toFixed(2) }} over budget
        </div>
      </div>
    </QCardSection>
  </QCard>

  <QCard>
    <QCardSection>
      <p class="text-h6">Expenses</p>

      <QList bordered separator dense>
        <QItem v-if="housingTotal > 0">
          <QItemSection avatar>
            <QIcon :name="Icon.HOME" color="amber-8" />
          </QItemSection>
          <QItemSection>{{ ExpenseCategory.HOUSING }}</QItemSection>
          <QItemSection side>${{ housingTotal.toFixed(2) }}</QItemSection>
        </QItem>

        <QItem v-if="transportationTotal > 0">
          <QItemSection avatar>
            <QIcon :name="Icon.TRANSPORTATION" color="deep-orange" />
          </QItemSection>
          <QItemSection>{{ ExpenseCategory.TRANSPORTATION }}</QItemSection>
          <QItemSection side>${{ transportationTotal.toFixed(2) }}</QItemSection>
        </QItem>

        <QItem v-if="educationTotal > 0">
          <QItemSection avatar>
            <QIcon :name="Icon.EDUCATION" color="indigo" />
          </QItemSection>
          <QItemSection>{{ ExpenseCategory.EDUCATION }}</QItemSection>
          <QItemSection side>${{ educationTotal.toFixed(2) }}</QItemSection>
        </QItem>

        <QItem v-if="groceriesTotal > 0">
          <QItemSection avatar>
            <QIcon :name="Icon.GROCERIES" color="light-green" />
          </QItemSection>
          <QItemSection>{{ ExpenseCategory.GROCERIES }}</QItemSection>
          <QItemSection side>${{ groceriesTotal.toFixed(2) }}</QItemSection>
        </QItem>

        <QItem v-if="entertainmentTotal > 0">
          <QItemSection avatar>
            <QIcon :name="Icon.ENTERTAINMENT" color="blue-8" />
          </QItemSection>
          <QItemSection>{{ ExpenseCategory.ENTERTAINMENT }}</QItemSection>
          <QItemSection side>${{ entertainmentTotal.toFixed(2) }}</QItemSection>
        </QItem>

        <QItem v-if="healthFitnessTotal > 0">
          <QItemSection avatar>
            <QIcon :name="Icon.HEALTH_FITNESS" color="red-10" />
          </QItemSection>
          <QItemSection>{{ ExpenseCategory.HEALTH_FITNESS }}</QItemSection>
          <QItemSection side>${{ healthFitnessTotal.toFixed(2) }}</QItemSection>
        </QItem>

        <QItem v-if="investmentsTotal > 0">
          <QItemSection avatar>
            <QIcon :name="Icon.INVESTMENTS" color="green" />
          </QItemSection>
          <QItemSection>{{ ExpenseCategory.INVESTMENTS }}</QItemSection>
          <QItemSection side>${{ investmentsTotal.toFixed(2) }}</QItemSection>
        </QItem>

        <QItem v-if="eatingDrinkingOutTotal > 0">
          <QItemSection avatar>
            <QIcon :name="Icon.EATING_DRINKING" color="purple-8" />
          </QItemSection>
          <QItemSection>{{ ExpenseCategory.EATING_DRINKING_OUT }}</QItemSection>
          <QItemSection side>${{ eatingDrinkingOutTotal.toFixed(2) }}</QItemSection>
        </QItem>

        <QItem v-if="giftsTotal > 0">
          <QItemSection avatar>
            <QIcon :name="Icon.GIFTS" color="pink-8" />
          </QItemSection>
          <QItemSection>{{ ExpenseCategory.GIFTS }}</QItemSection>
          <QItemSection side>${{ giftsTotal.toFixed(2) }}</QItemSection>
        </QItem>

        <QItem v-if="otherTotal > 0">
          <QItemSection avatar>
            <QIcon :name="Icon.OTHER" color="blue-grey" />
          </QItemSection>
          <QItemSection>{{ ExpenseCategory.OTHER }}</QItemSection>
          <QItemSection side>${{ otherTotal.toFixed(2) }}</QItemSection>
        </QItem>

        <QItem>
          <QItemSection avatar>
            <QIcon :name="Icon.TOTAL" />
          </QItemSection>
          <QItemSection class="text-weight-bold">TOTAL</QItemSection>
          <QItemSection class="text-weight-bold" side>${{ expenses.toFixed(2) }}</QItemSection>
        </QItem>
      </QList>

      <Pie
        :data="chartData"
        :options="getPieChartOptions()"
        style="max-height: 600px"
        class="q-mt-md"
      />
    </QCardSection>
  </QCard>
</template>
