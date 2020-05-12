import { login } from '../slices/currentUser'
import apiClient from '../../../api-client';

const authMiddleWare = () => next => action => {
    if(action.type === login.fulfilled.toString()) {
        const { authToken } = action.payload;
        localStorage.setItem('authToken', authToken);
        apiClient.defaults.headers['Authorization'] = `Bearer ${authToken}`;
    }
    next(action);
}

export default authMiddleWare;