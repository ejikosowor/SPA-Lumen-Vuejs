import ApiService from './api';
import StorageService from './storage';

const UserService = {

    async login(email, password) {
        const requestData = {
            method: 'POST',
            url: 'api/v1/login',
            data: {
                email: email,
                password: password
            } 
        };

        const response = await new Promise((resolve, reject) => {
            ApiService.customRequest(requestData)
                    .then(response => {
                        StorageService.saveUser(response.data.user);
                        StorageService.saveToken(response.data.token);

                        ApiService.setHeader();
                        resolve(response);
                    })
                    .catch(error => reject(error));
        });

        return response;
    },
    async register(name, display_name, email, password) {
        const requestData = {
            method: 'POST',
            url: 'api/v1/register',
            data: {
                name: name,
                display_name: display_name,
                email: email,
                password: password
            }
        };

        const response = await new Promise((resolve, reject) => {
            ApiService.customRequest(requestData)
                    .then(response => resolve(response))
                    .catch(error => reject(error));
        })

        return response;
    },
    logout() {
        StorageService.removeUser();
        StorageService.removeToken();

        ApiService.removeHeader();
    }
}

export default UserService;