/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;

Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('App', require('./components/App.vue').default);
// Vue.component('Home', require('./components/Home.vue').default);

import App from './components/App.vue';
import Home from './components/Home.vue';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ],
});

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});