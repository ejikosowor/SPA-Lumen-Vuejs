import Vue from 'vue'
import VueRouter from 'vue-router';

import StorageService from '../services/storage';

//Individual routing files
import { authRoutes } from './auth';
import { pageRoutes } from './pages';
import { NotFound } from './404';

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
    const Authenticated = StorageService.getToken();

    if(isAuth && !Authenticated) {
        return next({
            name: 'login',
            query: { redirect: to.fullPath }
        });
    }

    if(isGuest && Authenticated) {
        return next('/');
    }

    next();
});

export default router;