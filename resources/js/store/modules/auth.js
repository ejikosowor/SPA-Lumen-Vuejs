import router from '../../routes';

import UserService from '../../services/user';
import StorageService from '../../services/storage';

const state = {
    error: '',
    status: '',
    success: '',
    user: StorageService.getUser() || '',
    token: StorageService.getToken() || ''
};

const getters = {
    authUser: state => state.user,
    authError: state => state.error,
    authStatus: state => state.status,
    authenticated: state => !!state.token
};

const actions = {
    async login({ commit }, {email, password}) {

        commit('auth_request');

        await UserService
                    .login(email, password)
                    .then(response => {
                        commit('auth_success', response.data);
                        router.push(router.history.current.query.redirect || '/');
                    })
                    .catch(error => {
                        commit('auth_error', error.response.data);
                    });
    },
    async register({ commit }, {name, display_name, email, password}) {

        commit('register');

        await UserService
                    .register(name, display_name, email, password)
                    .then(response => {
                        commit('register_success', response.data);
                        router.push('/login');
                    })
                    .catch(error => commit('register_error', error.response.data));
    },
    logout({ commit }) {
        UserService.logout();
        commit('auth_logout');
        router.push('/login');
    }
};

const mutations = {
    auth_request: (state) => {
        state.status = 'Attempting';
    },
    auth_success: (state, data) => {
        state.status = 'Authenticated';
        state.token = data.token;
        state.user = data.user;
        state.error = '';
    },
    auth_error: (state, data) => {
        state.status = 'Failed';
        state.error = data.error;
    },
    auth_logout: (state) => {
        state.status = 'Logout';
        state.token = '';
        state.user = '';
        state.error = '';
    },
    register: (state) => {
        state.status = 'Registering';
    },
    register_success: (state, data) => {
        state.status = 'Registered';
        state.success = data.status;
    },
    register_error: (state, data) => {
        state.status = 'Failed';
        state.error = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};