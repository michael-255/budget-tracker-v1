<script setup lang="ts">
import { ExpenseCategory } from '@/models/Expense'
import { Icon, Month } from '@/types/general'
import { onMounted, ref, type Ref } from 'vue'
import useDialogs from '@/composables/useDialogs'
import DB from '@/services/Database'

const { yearReportDialog, monthReportDialog } = useDialogs()

const yearModel = ref(new Date().getFullYear())
const yearOptions: Ref<number[]> = ref([])

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
const yearMonthOptions: Ref<number[]> = ref([])

onMounted(async () => {
  const oldestExpense = (await DB.getOldestExpense())?.createdTimestamp

  // Populate the year options based on the oldest record year found
  if (oldestExpense) {
    const oldestExpenseYear = new Date(oldestExpense).getFullYear()
    const currentYear = new Date().getFullYear()

    for (let i = oldestExpenseYear; i <= currentYear; i++) {
      yearOptions.value.push(i)
      yearMonthOptions.value.push(i)
    }

    yearOptions.value.reverse()
    yearMonthOptions.value.reverse()
  } else {
    yearOptions.value.push(new Date().getFullYear())
    yearMonthOptions.value.push(new Date().getFullYear())
    yearOptions.value.reverse()
    yearMonthOptions.value.reverse()
  }
})
</script>

<template>
  <QCard class="q-mb-md">
    <QCardSection>
      <p class="text-h6">Reports by Year</p>

      <div class="text-weight-bold text-body1">Year</div>

      <QSelect
        v-model.number="yearModel"
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

      <QBtn
        label="View Report"
        type="submit"
        color="primary"
        :icon="Icon.CHARTS"
        @click="yearReportDialog(yearModel, categoryYearModel as ExpenseCategory)"
      />
    </QCardSection>
  </QCard>

  <QCard>
    <QCardSection>
      <p class="text-h6">Reports by Month</p>

      <div class="text-weight-bold text-body1">Month</div>

      <QSelect
        v-model.number="monthModel"
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
        v-model.number="yearMonthModel"
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

      <QBtn
        label="View Report"
        type="submit"
        color="primary"
        :icon="Icon.CHARTS"
        @click="monthReportDialog(monthModel, yearMonthModel)"
      />
    </QCardSection>
  </QCard>
</template>
