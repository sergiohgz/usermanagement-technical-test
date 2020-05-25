import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { openSnackbar } from '../../snackbar';
import { AppThunk } from '../../types';
import api from './api';
import { UserData, UserState } from './types';

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
            const errorMessage = error.toString();
            dispatch(asyncError(errorMessage));
            dispatch(openSnackbar(errorMessage));
            throw error;
        });
    return promise;
};

export { asyncStart, asyncSuccess, asyncError, getUser, resetUser };
export default reducer;
