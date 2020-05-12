import axios from 'axios';
import store from './configureStore';
import logout from './features/auth/slices/currentUser'

const authToken = localStorage.getItem('authToken')

const apiClient = axios.create({
    baseURL: 'http://localhost:5000'
});

if(authToken) {
    apiClient.defaults.headers['Authorization'] = `Bearer ${authToken}`;
}

apiClient.interceptors.response.use(function(response) {
    return response
}, function(error){
    if(error.response.status === 401) {
        console.log("Auth Error", error.response.data);
        localStorage.clear();
        //store.dispatch(logout())
    }
    return Promise.reject(error)
})

export default apiClient;