import router from '../../routes';

import UserService from '../../services/user';

const state = {
    error: '',
    status: '',
    success: ''
};

const getters = {
    error: state => state.error,
    status: state => state.status
};

const actions = {
    async register({ commit }, {name, display_name, email, password}) {

        commit('registering');

        await UserService
                    .register(name, display_name, email, password)
                    .then(response => {
                        commit('registered', response.data);
                        router.push('/login');
                    })
                    .catch(error => commit('failed', error.response.data));
    }
};

const mutations = {
    registering: (state) => {
        state.status = 'Registering';
    },
    registered: (state, data) => {
        state.status = 'Registered';
        state.success = data.status;
        state.error = '';
    },
    failed: (state, data) => {
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