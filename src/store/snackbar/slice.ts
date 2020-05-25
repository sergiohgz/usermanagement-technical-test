import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SnackbarState {
    message?: string;
    withLoading: boolean;
}

const initialState: SnackbarState = {
    message: undefined,
    withLoading: false,
};

const {
    actions: { open, close },
    reducer,
} = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        open: {
            reducer: (
                state,
                { payload }: PayloadAction<Required<SnackbarState>>
            ): SnackbarState => ({
                ...state,
                ...payload,
            }),
            prepare: (message: string, withLoading?: boolean) => ({
                payload: { message, withLoading: withLoading ?? false },
            }),
        },
        close: () => ({ ...initialState }),
    },
});

export { open as openSnackbar, close as closeSnackbar };
export default reducer;
