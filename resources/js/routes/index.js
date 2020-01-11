import Vue from 'vue'
import VueRouter from 'vue-router';

//Individual routing files
import { authRoutes } from './auth';
import { pageRoutes } from './pages';

// Plugin Setup
Vue.use(VueRouter);

// Configure VueRouter
const router = new VueRouter({
    routes: [
        pageRoutes,
        authRoutes
    ]
});

export default router;