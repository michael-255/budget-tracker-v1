<script setup lang="ts">
import { ExpenseCategory } from '@/models/Expense'
import { Icon, Month } from '@/types/general'
import { onMounted, ref } from 'vue'

const yearModel = ref(new Date().getFullYear())
const yearOptions = [new Date().getFullYear()]

const categoryYearModel = ref('All Categories')
const categoryYearOptions = [
  'All Categories',
  ...Object.values(ExpenseCategory).map((category) => ({
    label: category,
    value: category,
  })),
]

const monthModel = ref(new Date().getMonth())
const monthOptions = Object.values(Month).map((month, i) => ({
  label: `${i + 1} - ${month}`,
  value: i, // JS Date months are 0 indexed
}))

const yearMonthModel = ref(new Date().getFullYear())
const yearMonthOptions = [new Date().getFullYear()]

const categoryMonthModel = ref('All Categories')
const categoryMonthOptions = [
  'All Categories',
  ...Object.values(ExpenseCategory).map((category) => ({
    label: category,
    value: category,
  })),
]

onMounted(async () => {
  // TODO - Determine oldest record year, and provide all years between that and current year as selectable
  // TODO - Provide all months as selectable
  // TODO - Provide all categories as selectable + 'All' as an option
})
</script>

<template>
  <QCard class="q-mb-md">
    <QCardSection>
      <p class="text-h6">Reports by Year</p>

      <div class="text-weight-bold text-body1">Year</div>

      <QSelect
        v-model="yearModel"
        :options="yearOptions"
        lazy-rules
        emit-value
        map-options
        options-dense
        dense
        outlined
        color="primary"
        class="q-mb-md"
      />

      <div class="text-weight-bold text-body1">Category</div>

      <QSelect
        v-model="categoryYearModel"
        :options="categoryYearOptions"
        lazy-rules
        emit-value
        map-options
        options-dense
        dense
        outlined
        color="primary"
        class="q-mb-md"
      />

      <QBtn label="View Report" type="submit" color="primary" :icon="Icon.CHARTS" />
    </QCardSection>
  </QCard>

  <QCard>
    <QCardSection>
      <p class="text-h6">Reports by Month</p>

      <div class="text-weight-bold text-body1">Month</div>

      <QSelect
        v-model="monthModel"
        :options="monthOptions"
        lazy-rules
        emit-value
        map-options
        options-dense
        dense
        outlined
        color="primary"
        class="q-mb-md"
      />

      <div class="text-weight-bold text-body1">Year</div>

      <QSelect
        v-model="yearMonthModel"
        :options="yearMonthOptions"
        lazy-rules
        emit-value
        map-options
        options-dense
        dense
        outlined
        color="primary"
        class="q-mb-md"
      />

      <div class="text-weight-bold text-body1">Category</div>

      <QSelect
        v-model="categoryMonthModel"
        :options="categoryMonthOptions"
        lazy-rules
        emit-value
        map-options
        options-dense
        dense
        outlined
        color="primary"
        class="q-mb-md"
      />

      <QBtn label="View Report" type="submit" color="primary" :icon="Icon.CHARTS" />
    </QCardSection>
  </QCard>
</template>
