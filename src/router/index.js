import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Discussions',
        component: () => import('../views/Discussions.vue')
    },
    {
        path: '/discussion/:discussion_id',
        name: 'Discussions.show',
        component: () => import('../views/Discussion/Show.vue')
    },
    {
        path: '/posts',
        name: 'Posts',
        component: () => import('../views/Posts.vue')
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import('../views/Users.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
