<script setup lang="ts">
import { Icon } from '@/types/general'
import { useMeta } from 'quasar'
import { ref, type Ref, onUnmounted } from 'vue'
import { AppName } from '@/constants/global'
import type { Expense } from '@/models/Expense'
import ResponsivePage from '@/components/ResponsivePage.vue'
import WelcomeOverlay from '@/components/WelcomeOverlay.vue'
import DashboardBudget from '@/components/dashboard/DashboardBudget.vue'
import DashboardReports from '@/components/dashboard/DashboardReports.vue'
import useUIStore from '@/stores/ui'
import useLogger from '@/composables/useLogger'
import useRouting from '@/composables/useRouting'
import DB from '@/services/Database'

useMeta({ title: `${AppName} - Dashboard` })

const uiStore = useUIStore()
const { log } = useLogger()
const { goToCreate, goToExpensesData } = useRouting()

const dashboardOptions = [
  {
    value: 'budget',
    label: 'Budget',
    icon: Icon.BUDGET,
  },
  {
    value: 'reports',
    label: 'Reports',
    icon: Icon.CHARTS,
  },
]
const expenses: Ref<Expense[]> = ref([])

const subscription = DB.liveExpenses().subscribe({
  next: (liveData) => (expenses.value = liveData),
  error: (error) => log.error('Error fetching live Expenses', error),
})

onUnmounted(() => {
  subscription.unsubscribe()
})
</script>

<template>
  <ResponsivePage :bannerIcon="Icon.DASHBOARD" bannerTitle="Dashboard">
    <WelcomeOverlay />

    <section class="q-mb-md">
      <div class="row justify-center">
        <QBtn
          v-for="(option, i) in dashboardOptions"
          :key="i"
          round
          size="lg"
          class="q-mb-xs q-mx-xs"
          :icon="option.icon"
          :color="uiStore.dashboardSelection === option.value ? 'info' : 'grey'"
          @click="uiStore.dashboardSelection = option.value"
        />
        <div class="q-mx-lg" />
        <QBtn
          round
          size="lg"
          class="q-mb-xs q-mx-xs"
          :icon="Icon.EXPENSE"
          color="positive"
          @click="goToCreate()"
        />
        <QBtn
          round
          size="lg"
          class="q-mb-xs q-mx-xs"
          :icon="Icon.TABLE"
          color="accent"
          @click="goToExpensesData()"
        />
      </div>
    </section>

    <section
      v-show="uiStore.dashboardSelection === 'budget'"
      class="row justify-center q-gutter-md"
    >
      <div class="col-12">
        <DashboardBudget />
      </div>
    </section>

    <section
      v-show="uiStore.dashboardSelection === 'reports'"
      class="row justify-center q-gutter-md"
    >
      <div class="col-12">
        <DashboardReports />
      </div>
    </section>
  </ResponsivePage>
</template>
