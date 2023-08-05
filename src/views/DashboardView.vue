<script setup lang="ts">
import { Icon } from '@/types/general'
import { useMeta } from 'quasar'
import { ref, type Ref, onUnmounted, onMounted } from 'vue'
import { AppName } from '@/constants/global'
import { SettingKey } from '@/models/Setting'
import { DBTable } from '@/types/database'
import type { Expense } from '@/models/Expense'
import ResponsivePage from '@/components/ResponsivePage.vue'
import WelcomeOverlay from '@/components/WelcomeOverlay.vue'
import useUIStore from '@/stores/ui'
import useLogger from '@/composables/useLogger'
import DashboardRecordCardList from '@/components/dashboard/DashboardRecordCardList.vue'
import DB from '@/services/Database'

useMeta({ title: `${AppName} - Dashboard` })

const uiStore = useUIStore()
const { log } = useLogger()

const dashboardOptions = [
  {
    value: DBTable.EXPENSES,
    label: 'Expenses',
    icon: Icon.EXAMPLES,
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

    <section>
      {{ expenses }}
      <!-- <DashboardRecordCardList
        v-show="uiStore.dashboardSelection === DBTable.EXPENSES"
        :parentTable="DBTable.EXPENSES"
        :records="expenses"
        :showDescriptions="showDescriptions"
        :defaultsFunc="onDefaultExamples"
      /> -->
    </section>
  </ResponsivePage>
</template>
