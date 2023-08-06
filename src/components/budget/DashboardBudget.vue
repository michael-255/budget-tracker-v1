<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { SettingKey } from '@/models/Setting'
import DB from '@/services/Database'

const budget: Ref<number> = ref(0)
const expenses = ref(0)
const percentage = ref(0)
const color = ref('grey')
const label = ref('No Budget')

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
    <QCardSection> Pie Chart? </QCardSection>
  </QCard>
</template>
