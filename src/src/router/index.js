import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
