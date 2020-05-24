import { combineReducers, configureStore } from '@reduxjs/toolkit';

import users from './users';

const rootReducer = combineReducers({
    users,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
