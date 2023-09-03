<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import { Icon } from '@/types/general'
import { ExpenseCategory } from '@/models/Expense'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, ArcElement } from 'chart.js'
import useCharting from '@/composables/useCharting'
import DB from '@/services/Database'

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement)

const props = defineProps<{
  month: number
  year: number
}>()

const monthName = new Date(0, props.month).toLocaleString('default', {
  month: 'long',
})

defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent()
const { getMonthPieChartOptions, getMonthPieChartData } = useCharting()

const expenses = ref(0)
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
  const currentMonthExpenses = await DB.getExpensesForMonthAndYear(props.month, props.year)

  expenses.value = Number(
    currentMonthExpenses
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )

  housingTotal.value = Number(
    (await DB.getExpensesForMonthYearCategory(props.month, props.year, ExpenseCategory.HOUSING))
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  transportationTotal.value = Number(
    (
      await DB.getExpensesForMonthYearCategory(
        props.month,
        props.year,
        ExpenseCategory.TRANSPORTATION
      )
    )
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  groceriesTotal.value = Number(
    (await DB.getExpensesForMonthYearCategory(props.month, props.year, ExpenseCategory.GROCERIES))
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  entertainmentTotal.value = Number(
    (
      await DB.getExpensesForMonthYearCategory(
        props.month,
        props.year,
        ExpenseCategory.ENTERTAINMENT
      )
    )
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  healthFitnessTotal.value = Number(
    (
      await DB.getExpensesForMonthYearCategory(
        props.month,
        props.year,
        ExpenseCategory.HEALTH_FITNESS
      )
    )
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  investmentsTotal.value = Number(
    (await DB.getExpensesForMonthYearCategory(props.month, props.year, ExpenseCategory.INVESTMENTS))
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  eatingDrinkingOutTotal.value = Number(
    (
      await DB.getExpensesForMonthYearCategory(
        props.month,
        props.year,
        ExpenseCategory.EATING_DRINKING_OUT
      )
    )
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  giftsTotal.value = Number(
    (await DB.getExpensesForMonthYearCategory(props.month, props.year, ExpenseCategory.GIFTS))
      .reduce((acc, expense) => acc + Number(expense?.amount ? expense.amount : 0), 0)
      .toFixed(2)
  )
  otherTotal.value = Number(
    (await DB.getExpensesForMonthYearCategory(props.month, props.year, ExpenseCategory.OTHER))
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
})
</script>

<template>
  <QDialog
    ref="dialogRef"
    transition-show="slide-up"
    transition-hide="slide-down"
    maximized
    @hide="onDialogHide"
  >
    <QToolbar class="bg-info text-white" style="max-height: 50px">
      <QIcon :name="Icon.CHARTS" size="sm" class="q-mx-sm" />
      <QToolbarTitle>Charts</QToolbarTitle>
      <QBtn flat round :icon="Icon.CLOSE" @click="onDialogOK" />
    </QToolbar>

    <QCard class="q-dialog-plugin">
      <QCardSection>
        <p class="text-h5">{{ monthName }} {{ year }}</p>

        <p class="text-h6">Expenses</p>

        <div v-if="housingTotal > 0">
          <span>{{ ExpenseCategory.HOUSING }}:</span>
          ${{ Number(housingTotal.toFixed(2)) }}
        </div>
        <div v-if="transportationTotal > 0">
          <span>{{ ExpenseCategory.TRANSPORTATION }}:</span>
          ${{ Number(transportationTotal.toFixed(2)) }}
        </div>
        <div v-if="groceriesTotal > 0">
          <span>{{ ExpenseCategory.GROCERIES }}:</span>
          ${{ Number(groceriesTotal.toFixed(2)) }}
        </div>
        <div v-if="entertainmentTotal > 0">
          <span>{{ ExpenseCategory.ENTERTAINMENT }}:</span>
          ${{ Number(entertainmentTotal.toFixed(2)) }}
        </div>
        <div v-if="healthFitnessTotal > 0">
          <span>{{ ExpenseCategory.HEALTH_FITNESS }}:</span>
          ${{ Number(healthFitnessTotal.toFixed(2)) }}
        </div>
        <div v-if="investmentsTotal > 0">
          <span>{{ ExpenseCategory.INVESTMENTS }}:</span>
          ${{ Number(investmentsTotal.toFixed(2)) }}
        </div>
        <div v-if="eatingDrinkingOutTotal > 0">
          <span>{{ ExpenseCategory.EATING_DRINKING_OUT }}:</span>
          ${{ Number(eatingDrinkingOutTotal.toFixed(2)) }}
        </div>
        <div v-if="giftsTotal > 0">
          <span>{{ ExpenseCategory.GIFTS }}:</span>
          ${{ Number(giftsTotal.toFixed(2)) }}
        </div>
        <div v-if="otherTotal > 0">
          <span>{{ ExpenseCategory.OTHER }}:</span>
          ${{ Number(otherTotal.toFixed(2)) }}
        </div>
        <div>
          <span>TOTAL:</span>
          ${{ Number(expenses.toFixed(2)) }}
        </div>

        <Pie
          :data="chartData"
          :options="getMonthPieChartOptions()"
          style="max-height: 600px"
          class="q-mt-md"
        />
      </QCardSection>
    </QCard>
  </QDialog>
</template>
