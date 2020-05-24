import styled from '@emotion/styled';
import { AppBar, Theme, Toolbar, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../store/store';
import { AppDispatch } from '../../store/types';
import { getUsers, resetUsers } from '../../store/users';
import Loading from '../common/Loading';
import ListItem from './ListItem';

const Results = styled('div')<{}, Theme>(({ theme }) => ({
    padding: theme.spacing(3),
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
        width: '85%',
    },
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
                    asyncData?.data.map(item => (
                        <ListItem
                            key={item.id}
                            id={item.id}
                            firstName={item.firstName}
                            lastName={item.lastName}
                        />
                    ))
                ) : (
                    <Typography variant="h5">No hay usuarios</Typography>
                )}
            </Results>
        </>
    );
};

export default UserList;
