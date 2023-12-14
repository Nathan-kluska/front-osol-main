import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ListOfOrganizationsView from '@/views/ListOfOrganizationsView.vue'
import ListOfOsolBaseView from '@/views/ListOfOsolBaseView.vue'
import ListOfOsolPicoView from '@/views/ListOfOsolPicoView.vue'
import ListOfUsersView from '@/views/ListOfUsersView.vue'
import StatisticsView from '@/views/StatisticsView.vue'
import TicketsView from '@/views/TicketsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/list_of_organizations',
      name: 'organizations',
      component: ListOfOrganizationsView
    },
    {
      path: '/list_of_osol_base',
      name: 'osolbase',
      component: ListOfOsolBaseView
    },
    {
      path: '/list_of_osol_pico',
      name: 'osolpico',
      component: ListOfOsolPicoView
    },
    {
      path: '/list_of_users',
      name: 'listofusers',
      component: ListOfUsersView
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsView
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: TicketsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
