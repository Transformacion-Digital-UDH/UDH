import { createWebHistory, createRouter } from 'vue-router'

import MainView from '@/views/MainView.vue'
import SystemView from '@/views/SystemView.vue'

const routes = [
  { path: '/', component: MainView },
  { path: '/sistemas-e-informatica', component: SystemView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router