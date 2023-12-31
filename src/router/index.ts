import { createRouter, createWebHistory } from 'vue-router'
import { RouteName } from '@/types/general'
import { idSchema } from '@/models/Expense'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.DASHBOARD,
      meta: { layout: 'MenuLayout' },
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/logs-data',
      name: RouteName.DATA_LOGS,
      meta: { layout: 'MenuLayout' },
      component: () => import('../views/DataLogsView.vue'),
    },
    {
      path: '/records-data',
      name: RouteName.DATA_RECORDS,
      meta: { layout: 'MenuLayout' },
      component: () => import('../views/DataRecordsView.vue'),
    },
    {
      path: '/create',
      name: RouteName.CREATE,
      meta: { layout: 'MenuLayout' },
      component: () => import('../views/CreateView.vue'),
    },
    {
      path: '/edit/:id',
      name: RouteName.EDIT,
      meta: { layout: 'MenuLayout' },
      component: () => import('../views/EditView.vue'),
      beforeEnter: (to, _, next) => {
        if (idSchema.safeParse(to.params.id).success) {
          next()
        } else {
          next({ name: RouteName.NOT_FOUND })
        }
      },
    },
    {
      path: '/settings',
      name: RouteName.SETTINGS,
      meta: { layout: 'MenuLayout' },
      component: () => import('../views/SettingsView.vue'),
    },
    {
      path: '/faq',
      name: RouteName.FAQ,
      meta: { layout: 'MenuLayout' },
      component: () => import('../views/FAQView.vue'),
    },
    {
      path: '/about',
      name: RouteName.ABOUT,
      meta: { layout: 'MenuLayout' },
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/donate',
      name: RouteName.DONATE,
      meta: { layout: 'MenuLayout' },
      component: () => import('../views/DonateView.vue'),
    },
    {
      path: '/:pathMatch(.*)*', // 404 Not Found
      name: RouteName.NOT_FOUND,
      meta: { layout: 'MenuLayout' },
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
