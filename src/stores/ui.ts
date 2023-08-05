import { defineStore } from 'pinia'
import { Duration } from '@/types/general'

const useUIStore = defineStore({
  id: 'ui',

  state: () => ({
    drawer: false,
    dashboardSelection: 'budget',
    chartTime: Duration[Duration['Three Months']] as keyof typeof Duration,
  }),
})

export default useUIStore
