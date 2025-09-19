import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppHeader from '@/components/AppHeader.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: { default: HomeView, header: AppHeader},
    },
    {
      path: '/actu',
      name: 'actu',
      components: { default: HomeView, header: AppHeader },
    },
    {
      path: '/real',
      name: 'real',
      components: { default: HomeView, header: AppHeader },
    },
  ],
})

export default router
