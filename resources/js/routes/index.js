import Vue from 'vue'
import VueRouter from 'vue-router';

import TokenService from '../services/storage';

//Individual routing files
import { authRoutes } from './auth';
import { pageRoutes } from './pages';
import { NotFound } from './NotFound';

// Plugin Setup
Vue.use(VueRouter);

// Configure VueRouter
const router = new VueRouter({
    mode: 'history',
    routes: [
        pageRoutes,
        authRoutes,
        NotFound
    ]
});

router.beforeEach((to, from, next) => {
    const isAuth = to.matched.some(record => record.meta.auth);
    const isGuest = to.matched.some(record => record.meta.guest);
    const loggedIn = TokenService.getToken();

    if(isAuth && !loggedIn) {
        return next({
            name: 'login',
            query: { redirect: to.name }
        });
    }

    if(isGuest && loggedIn) {
        return next('/');
    }

    next();
});

export default router;