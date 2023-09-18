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
const { getPieChartOptions, getPieChartData } = useCharting()

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
const educationTotal = ref(0)
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
  educationTotal.value = Number(
    (await DB.getExpensesForMonthYearCategory(props.month, props.year, ExpenseCategory.EDUCATION))
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
      <QToolbarTitle>Report By Month</QToolbarTitle>
      <QBtn flat round :icon="Icon.CLOSE" @click="onDialogOK" />
    </QToolbar>

    <QCard class="q-dialog-plugin">
      <QCardSection>
        <p class="text-h6">Expenses - {{ monthName }} {{ year }}</p>

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
          class="q-mt-md q-mb-xl"
        />
      </QCardSection>
    </QCard>
  </QDialog>
</template>
