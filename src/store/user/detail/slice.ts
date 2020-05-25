import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../types';
import { UserState, UserData } from './types';
import api from './api';

const initialState: UserState = {
    asyncLoading: false,
};

const {
    actions: { asyncStart, asyncSuccess, asyncError, resetUser },
    reducer,
} = createSlice({
    name: 'user',
    initialState,
    reducers: {
        asyncStart: (state): UserState => ({
            ...state,
            asyncLoading: true,
        }),
        asyncSuccess: (
            state,
            { payload }: PayloadAction<UserData>
        ): UserState => ({
            ...state,
            asyncLoading: false,
            asyncData: payload,
        }),
        asyncError: (state, { payload }: PayloadAction<string>): UserState => ({
            ...state,
            asyncLoading: false,
            asyncError: true,
            error: payload,
        }),
        resetUser: (): UserState => ({
            ...initialState,
        }),
    },
});

const getUser = (
    userId: string
): AppThunk<ReturnType<typeof api.getUser>> => dispatch => {
    dispatch(asyncStart());
    const promise = api
        .getUser(userId)
        .then(response => {
            dispatch(asyncSuccess(response.data));
            return response;
        })
        .catch(error => {
            dispatch(asyncError(error.toString()));
            throw error;
        });
    return promise;
};

export { asyncStart, asyncSuccess, asyncError, getUser, resetUser };
export default reducer;
