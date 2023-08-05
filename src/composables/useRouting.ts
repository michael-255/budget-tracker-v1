import { useRoute, useRouter, type Router, type RouteLocationNormalizedLoaded } from 'vue-router'
import { RouteName } from '@/types/general'
import type { DBTable } from '@/types/database'
import { idSchema } from '@/models/Expense'
import useLogger from '@/composables/useLogger'

export default function useRouting(): {
  route: RouteLocationNormalizedLoaded
  router: Router
  routeId?: string
  routeTable?: DBTable
  goToDashboard: () => void
  goToLogsData: () => void
  goToExpensesData: () => void
  goToCreate: () => void
  goToEdit: (id: string) => void
  goBack: () => void
} {
  const route = useRoute()
  const router = useRouter()
  const { log } = useLogger()

  // Possible route params
  const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id

  // Cleaned route params
  const routeId = idSchema.safeParse(id).success ? id : undefined

  function goToDashboard() {
    try {
      router.push({
        name: RouteName.DASHBOARD,
      })
    } catch (error) {
      log.error('Error accessing dashboard route', error)
    }
  }

  function goToLogsData() {
    try {
      router.push({
        name: RouteName.DATA_LOGS,
      })
    } catch (error) {
      log.error('Error accessing logs data route', error)
    }
  }

  function goToExpensesData() {
    try {
      router.push({
        name: RouteName.DATA_RECORDS,
      })
    } catch (error) {
      log.error('Error accessing expenses data route', error)
    }
  }

  function goToCreate() {
    try {
      router.push({
        name: RouteName.CREATE,
      })
    } catch (error) {
      log.error('Error accessing create route', error)
    }
  }

  function goToEdit(id: string) {
    try {
      router.push({
        name: RouteName.EDIT,
        params: { id },
      })
    } catch (error) {
      log.error('Error accessing edit route', error)
    }
  }

  /**
   * Go back if previous route state is part of the app history, otherwise go to Dashboard.
   */
  function goBack() {
    try {
      if (router?.options?.history?.state?.back) {
        router.back()
      } else {
        router.push({ name: RouteName.DASHBOARD })
      }
    } catch (error) {
      log.error('Error accessing go back route', error)
    }
  }

  return {
    route,
    router,
    routeId,
    goToDashboard,
    goToLogsData,
    goToExpensesData,
    goToCreate,
    goToEdit,
    goBack,
  }
}
