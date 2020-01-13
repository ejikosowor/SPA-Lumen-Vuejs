import StorageService from '../../services/storage';

const state = {
    status: '',
    user: StorageService.getUser() || '',
    token: StorageService.getToken() || ''
};

const getters = {
    authenticated: state => !!state.token,
    authStatus: state => state.status,
    authUser: state => state.user
};

const actions = {
    async login({ commit }, {email, password}) {
        commit('auth_request')
        await axios({url: 'api/v1/login', data: {email, password}, method: 'POST'})
                .then(response => {
                    StorageService.saveUser(response.data.user);
                    StorageService.saveToken(response.data.token);
                    commit('auth_success', response.data);
                })
                .catch(error => {
                    commit('auth_error', error);
                    console.log(error);
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
    },
    auth_error: (state, error) => {
        state.status = 'Failed'
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};