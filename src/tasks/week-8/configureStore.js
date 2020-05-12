import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authMiddleWare from './features/auth/middlewares/auth';
import currentUser from './features/auth/slices/currentUser';

const middleware = [...getDefaultMiddleware(), authMiddleWare]

const store = configureStore({
    reducer: {
        currentUser
    },
    middleware,
    devTools: true
});

export default store;