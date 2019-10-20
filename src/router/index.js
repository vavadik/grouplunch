import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import Users from '../views/users';
import About from '../views/about';

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
        component: Users,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
