const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

/**
 * Manage storage and retrieval of auth tokens from storage
 *
 * @returns localStorage
 * Local Storage should always be accessed through this instance
 */

const StorageService = {

    //Retrieve auth token from localStorage
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },
    //Save auth token to localStorage
    saveToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    },
    //Clear auth token from localStorage
    removeToken() {
        return localStorage.removeItem(TOKEN_KEY);
    },
    // Retrieve authenticated user from localstorage
    getUser() {
        return localStorage.getItem(USER_KEY);
    },
    // Save authenticated user to localStorage
    saveUser(user) {
        return localStorage.setItem(USER_KEY, user);
    },
    // Clear auth user from localStorage
    removeUser() {
        return localStorage.removeItem(USER_KEY);
    }
};

 export default StorageService;