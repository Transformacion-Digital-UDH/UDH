import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import SystemView from '@/views/SystemView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/carrera/sistemas-e-informatica', name: 'sistemas',  component: SystemView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router