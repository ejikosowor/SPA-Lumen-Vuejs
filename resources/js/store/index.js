import Vue from 'vue';
import Vuex from 'vuex';

// Import app modules
import authentication from './modules/authentication';
import registration from './modules/registration';

// Load Vuex
Vue.use(Vuex);

// Create Vuex Store
const store = new Vuex.Store({
    modules: {
        authentication,
        registration
    }
});

export default store;