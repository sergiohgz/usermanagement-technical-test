import {
    CircularProgress,
    IconButton,
    Snackbar as MuiSnackbar,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeSnackbar } from '../../store/snackbar';
import { AppState } from '../../store/store';
import { AppDispatch } from '../../store/types';

const Snackbar: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { message, withLoading } = useSelector(
        (appState: AppState) => appState.snackbar
    );

    const handleClose = (): void => {
        dispatch(closeSnackbar());
    };

    return (
        <MuiSnackbar
            open={!!message}
            onClose={handleClose}
            autoHideDuration={8000}
            message={message}
            action={
                <>
                    {withLoading ? (
                        <CircularProgress size={24} color="secondary" />
                    ) : (
                        <IconButton onClick={handleClose} color="inherit">
                            <Close />
                        </IconButton>
                    )}
                </>
            }
        />
    );
};

export default Snackbar;
