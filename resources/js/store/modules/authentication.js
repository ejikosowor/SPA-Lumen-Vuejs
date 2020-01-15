import router from '../../routes';

import UserService from '../../services/user';
import StorageService from '../../services/storage';

const state = {
    error: '',
    status: '',
    token: StorageService.getToken() || ''
};

const getters = {
    error: state => state.error,
    authenticated: state => !!state.token
};

const actions = {
    async login({ commit }, {email, password}) {

        commit('authenticating');

        await UserService
                    .login(email, password)
                    .then(response => {
                        commit('authenticated', response.data);
                        router.push(router.history.current.query.redirect || '/');
                    })
                    .catch(error => {
                        commit('failed', error.response.data);
                    });
    },
    logout({ commit }) {
        UserService.logout();
        commit('logout');
        router.push('/login');
    }
};

const mutations = {
    authenticating: (state) => {
        state.status = 'Authenticating';
    },
    authenticated: (state, data) => {
        state.status = 'Authenticated';
        state.token = data.token;
        state.error = '';
    },
    failed: (state, data) => {
        state.status = 'Failed';
        state.error = data.error;
    },
    logout: (state) => {
        state.status = 'Logout';
        state.token = '';
        state.error = '';
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};