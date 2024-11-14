import { createWebHistory, createRouter } from 'vue-router'

import MainView from '@/views/MainView.vue'
import SystemView from '@/views/SystemView.vue'

const routes = [
  { path: '/', name: 'home', component: MainView },
  { path: '/carrera/sistemas-e-informatica', name: 'sistemas',  component: SystemView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router