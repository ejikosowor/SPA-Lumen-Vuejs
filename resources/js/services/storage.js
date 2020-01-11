const TOKEN_KEY = 'access_token';

/**
 * Manage storage and retrieval of access tokens from storage
 *
 * @returns localStorage
 * Local Storage should always be accessed through this instance
 */

 const TokenService = {

    //Retrieve access token from localStorage
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },
    //Save access token to localStorage
    saveToken() {
        return localStorage.setItem(TOKEN_KEY);
    },
    //Clear access token from localStorage
    removeToken() {
        return localStorage.removeItem(TOKEN_KEY);
    }
 };

 export { TokenService };