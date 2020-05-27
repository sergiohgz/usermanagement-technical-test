import styled from '@emotion/styled';
import {
    AppBar,
    Button,
    Grid,
    Theme,
    Toolbar,
    Typography,
} from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../store/store';
import { AppDispatch } from '../../store/types';
import { getMoreUsers, getUsers, resetUsers } from '../../store/users';
import Loading from '../common/Loading';
import ListItem from './ListItem';

const Results = styled('div')<{}, Theme>(({ theme }) => ({
    padding: theme.spacing(3),
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
        width: '85%',
    },
}));

const LoadMoreButton = styled(Button)<{}, Theme>(({ theme }) => ({
    margin: theme.spacing(2, 'auto'),
}));

const UserList: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { asyncLoading, asyncData } = useSelector(
        (appState: AppState) => appState.users
    );

    useEffect(() => {
        dispatch(getUsers());
        return () => {
            dispatch(resetUsers());
        };
    }, [dispatch]);

    const loadMore = (): void => {
        if (asyncData) {
            dispatch(getMoreUsers(asyncData.page + 1));
        }
    };

    return (
        <>
            {asyncLoading && <Loading />}
            <AppBar position="sticky" color="inherit">
                <Toolbar>
                    <Typography variant="body1">
                        Total: <span>{asyncData?.total ?? '-'}</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Results>
                {asyncData ? (
                    <>
                        {asyncData.data.map(item => (
                            <ListItem
                                key={item.id}
                                id={item.id}
                                firstName={item.firstName}
                                lastName={item.lastName}
                            />
                        ))}
                        <Grid container justify="flex-end">
                            {asyncData.page < asyncData.totalPages && (
                                <Grid item>
                                    <LoadMoreButton
                                        color="primary"
                                        variant="contained"
                                        onClick={() => loadMore()}
                                    >
                                        Ver más
                                    </LoadMoreButton>
                                </Grid>
                            )}
                        </Grid>
                    </>
                ) : (
                    <Typography variant="h5">No hay usuarios</Typography>
                )}
            </Results>
        </>
    );
};

export default UserList;
