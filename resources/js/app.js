/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './layout/App.vue';

// Router Setup
import routes from './routes';

// Plugin Setup
Vue.use(VueRouter);

// Configure VueRouter
const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});