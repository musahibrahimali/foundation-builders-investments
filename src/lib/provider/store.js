import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./reducers/userReducer";
import cookieReducer from './reducers/cookieReducer';

const store = configureStore({
    reducer: {
        cookie: cookieReducer,
        user: userReducer,
    },
});

export default store;