import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../types';
import { HomeData, HomeState } from './types';

const initialState: HomeState = {
    asyncLoading: false,
};

const {
    actions: { asyncStart, asyncSuccess, asyncError, resetHome },
    reducer,
} = createSlice({
    name: 'home',
    initialState,
    reducers: {
        asyncStart: state => ({
            ...state,
            asyncLoading: true,
        }),
        asyncSuccess: (state, { payload }: PayloadAction<HomeData>) => ({
            ...state,
            asyncLoading: false,
            asyncData: payload,
        }),
        asyncError: (state, { payload }: PayloadAction<string>): HomeState => ({
            ...state,
            asyncLoading: false,
            asyncError: true,
            error: payload,
        }),
        resetHome: () => ({
            ...initialState,
        }),
    },
});

const getHome = (): AppThunk<Promise<HomeData>> => dispatch => {
    dispatch(asyncStart());

    const promise = new Promise<HomeData>(resolve =>
        setTimeout(resolve, 3000, { message: 'Hello world' })
    )
        .then(data => {
            dispatch(asyncSuccess(data));
            return data;
        })
        .catch(error => {
            dispatch(asyncError(error.toString()));
            throw error;
        });
    return promise;
};

export { asyncStart, asyncSuccess, asyncError, getHome, resetHome };
export default reducer;
