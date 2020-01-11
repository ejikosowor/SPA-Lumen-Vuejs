import { TokenService } from "./storage";

const ApiService = {

    //Set authorization header
    setHeader() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`;
    },
    //Remove authorization header
    removeHeader() {
        axios.defaults.headers.common = {}
    },
    //Make a GET request
    get(resource) {
        return axios.get(resource)
    },
    // Make a POST request
    post(resource, data) {
        return axios.post(resource, data)
    },
    
    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
    **/
    customRequest(data) {
        return axios(data)
    }
};

export default ApiService;