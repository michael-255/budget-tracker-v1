<script setup lang="ts">
import { Icon } from '@/types/general'
import { useMeta } from 'quasar'
import { ref, type Ref, onUnmounted, onMounted } from 'vue'
import { AppName } from '@/constants/global'
import { SettingKey } from '@/models/Setting'
import type { Expense } from '@/models/Expense'
import ResponsivePage from '@/components/ResponsivePage.vue'
import WelcomeOverlay from '@/components/WelcomeOverlay.vue'
import useUIStore from '@/stores/ui'
import useLogger from '@/composables/useLogger'
import useRouting from '@/composables/useRouting'
import useDefaults from '@/composables/useDefaults'
import DB from '@/services/Database'

useMeta({ title: `${AppName} - Dashboard` })

const uiStore = useUIStore()
const { log } = useLogger()
const { goToCreate, goToExpensesData } = useRouting()
const { onDemostrationExpenses } = useDefaults()

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
const showDescriptions = ref(false)
const expenses: Ref<Expense[]> = ref([])

const subscription = DB.liveExpenses().subscribe({
  next: (liveData) => (expenses.value = liveData),
  error: (error) => log.error('Error fetching live Expenses', error),
})

onMounted(async () => {
  showDescriptions.value = Boolean(await DB.getSettingValue(SettingKey.DASHBOARD_DESCRIPTIONS))
})

onUnmounted(() => {
  subscription.unsubscribe()
})
</script>

<template>
  <ResponsivePage :bannerIcon="Icon.DASHBOARD" bannerTitle="Dashboard">
    <WelcomeOverlay />

    <section class="q-mb-md">
      <p class="text-center text-body1">
        {{ dashboardOptions.find((i) => i.value === uiStore.dashboardSelection)?.label }}
      </p>

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
      </div>
    </section>

    <section
      v-show="uiStore.dashboardSelection === 'budget'"
      class="row justify-center q-gutter-md"
    >
      <div class="col-12 text-center">
        <QBtn label="Add Expense" color="positive" :icon="Icon.EXPENSE" @click="goToCreate()" />
      </div>

      <div class="col-12 text-center">
        <QBtn
          label="View Expenses"
          color="primary"
          :icon="Icon.TABLE"
          @click="goToExpensesData()"
        />
      </div>

      <div class="col-12 text-center">
        <QBtn
          label="Create Demo Expenses"
          color="accent"
          :icon="Icon.CREATE"
          @click="onDemostrationExpenses()"
        />
      </div>
    </section>

    <section
      v-show="uiStore.dashboardSelection === 'reports'"
      class="row justify-center q-gutter-md"
    >
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5">Reports Section</div>
    </section>
  </ResponsivePage>
</template>
