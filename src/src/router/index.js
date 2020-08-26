import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage';
import PostPage from "@/views/PostPage";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/blog/:year/:slug',
    name: 'Post',
    component: PostPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
