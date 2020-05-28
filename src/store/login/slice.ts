import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { openSnackbar } from '../snackbar';
import { AppThunk } from '../types';
import api from './api';
import { LoginForm, LoginState, UserToken } from './types';

const initialState: LoginState = {
    asyncLoading: false,
    asyncData: undefined,
};

const {
    actions: { asyncStart, asyncSuccess, asyncError, resetState },
    reducer,
} = createSlice({
    name: 'login',
    initialState,
    reducers: {
        asyncStart: (state): LoginState => ({
            ...state,
            asyncLoading: true,
        }),
        asyncSuccess: (
            state,
            { payload }: PayloadAction<UserToken>
        ): LoginState => ({
            ...state,
            asyncLoading: false,
            asyncData: payload,
        }),
        asyncError: (
            state,
            { payload }: PayloadAction<string>
        ): LoginState => ({
            ...state,
            asyncLoading: false,
            asyncError: true,
            error: payload,
        }),
        resetState: (): LoginState => ({
            ...initialState,
        }),
    },
});

const doLogin = (
    data: LoginForm
): AppThunk<ReturnType<typeof api.login>> => dispatch => {
    dispatch(asyncStart());
    const promise = api
        .login(data)
        .then(response => {
            dispatch(asyncSuccess(response.data));
            return response;
        })
        .catch(error => {
            const errorMessage = error.toString();
            dispatch(asyncError(errorMessage));
            dispatch(openSnackbar('Usuario o contraseñas incorrectos'));
            throw error;
        });
    return promise;
};

export { asyncStart, asyncSuccess, asyncError, doLogin, resetState as logout };
export default reducer;
