import { combineReducers, configureStore } from '@reduxjs/toolkit';

import login from './login';
import snackbar from './snackbar';
import user from './user';
import users from './users';

const rootReducer = combineReducers({
    login,
    snackbar,
    user,
    users,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
