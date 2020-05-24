import { combineReducers, configureStore } from '@reduxjs/toolkit';

import home from './home';

const rootReducer = combineReducers({
    home,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
