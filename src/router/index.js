import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/users',
        name: 'users',
        component() {
            return import('../views/users.vue');
        },
    },
    {
        path: '/about',
        name: 'about',
        component() {
            return import('../views/about.vue');
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
