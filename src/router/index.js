import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActuView from '../views/ActuView.vue'
import RealView from '../views/RealView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: { default: HomeView},
    },
    {
      path: '/actu',
      name: 'actu',
      components: { default: ActuView },
    },
    {
      path: '/real',
      name: 'real',
      components: { default: RealView },
    },
  ],
})

export default router
