import Vue from 'vue';
import Vuex from 'vuex';

// Import app modules
import auth from './modules/auth';

// Load Vuex
Vue.use(Vuex);

// Create Vuex Store
const store = new Vuex.Store({
    modules: {
        auth
    }
});

export default store;