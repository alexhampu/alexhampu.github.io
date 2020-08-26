import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '@/views/HomePage';
import PostPage from "@/views/PostPage";
import BlogPage from "@/views/BlogPage";

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
    },
    {
        path: '/blog',
        name: 'Blog',
        component: BlogPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
