import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { openSnackbar } from '../../snackbar';
import { AppThunk, AsyncState } from '../../types';
import api from './api';
import { UserEditionData } from './types';

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

const editUser = (
    userId: string,
    data: UserEditionData
): AppThunk<ReturnType<typeof api.editUser>> => dispatch => {
    dispatch(asyncStart());
    dispatch(openSnackbar('Editando usuario', true));
    const promise = api
        .editUser(userId, data)
        .then(response => {
            dispatch(asyncSuccess());
            dispatch(openSnackbar('Usuario editado'));
            return response;
        })
        .catch(error => {
            dispatch(asyncError(error.toString()));
            dispatch(openSnackbar(error.toString()));
            throw error;
        });
    return promise;
};

export { asyncStart, asyncSuccess, asyncError, editUser };
export default reducer;
