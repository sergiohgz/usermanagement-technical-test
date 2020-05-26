import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { openSnackbar } from '../../snackbar';
import { AppThunk, AsyncState } from '../../types';
import api from './api';

const initialState: AsyncState = {
    asyncLoading: false,
};

const {
    actions: { asyncStart, asyncSuccess, asyncError },
    reducer,
} = createSlice({
    name: 'user/remove',
    initialState,
    reducers: {
        asyncStart: (state): AsyncState => ({
            ...state,
            asyncLoading: true,
        }),
        asyncSuccess: (state): AsyncState => ({
            ...state,
            asyncLoading: false,
        }),
        asyncError: (
            state,
            { payload }: PayloadAction<string>
        ): AsyncState => ({
            ...state,
            asyncLoading: false,
            asyncError: true,
            error: payload,
        }),
    },
});

const removeUser = (
    userId: string
): AppThunk<ReturnType<typeof api.removeUser>> => dispatch => {
    dispatch(asyncStart());
    dispatch(openSnackbar('Eliminando usuario', true));
    const promise = api
        .removeUser(userId)
        .then(response => {
            dispatch(asyncSuccess());
            dispatch(openSnackbar('Usuario eliminado'));
            return response;
        })
        .catch(error => {
            dispatch(asyncError(error.toString()));
            dispatch(openSnackbar(error.toString()));
            throw error;
        });
    return promise;
};

export { asyncStart, asyncSuccess, asyncError, removeUser };
export default reducer;
