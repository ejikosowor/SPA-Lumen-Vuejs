import router from '../../routes';

import ApiService from '../../services/api';
import StorageService from '../../services/storage';

const state = {
    status: '',
    user: StorageService.getUser() || '',
    token: StorageService.getToken() || '',
    error: ''
};

const getters = {
    authenticated: state => !!state.token,
    authStatus: state => state.status,
    authUser: state => state.user,
    authError: state => state.error
};

const actions = {
    async login({ commit }, {email, password}) {

        commit('auth_request')

        await ApiService.customRequest({url: 'api/v1/login', data: {email, password}, method: 'POST'})
                        .then(response => {
                            StorageService.saveUser(response.data.user);
                            StorageService.saveToken(response.data.token);
                            ApiService.setHeader();
                            commit('auth_success', response.data);
                            router.push(router.history.current.query.redirect || '/');
                        })
                        .catch(error => {
                            commit('auth_error', error.response.data);
                        });
    }
};

const mutations = {
    auth_request: (state) => {
        state.status = 'Attempting'
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};