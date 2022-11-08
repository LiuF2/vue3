import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../src/pages/login.vue'),
    },
    {
        path: '/index',
        name: 'home',
        component: () => import('../src/pages/index.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router
