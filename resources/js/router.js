import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/Home.vue';

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ],
});