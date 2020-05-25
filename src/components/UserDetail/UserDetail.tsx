import styled from '@emotion/styled';
import { Theme, Typography } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppState } from '../../store/store';
import { AppDispatch } from '../../store/types';
import { getUser, resetUser } from '../../store/user/detail';
import Loading from '../common/Loading';
import SectionBar from './SectionBar';
import UserInfo from './UserInfo';

const DataContainer = styled('div')<{}, Theme>(({ theme }) => ({
    padding: theme.spacing(2),
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
        width: '85%',
    },
}));

interface UserParams {
    userId: string;
}

const User: FC = () => {
    const { userId } = useParams<UserParams>();
    const dispatch = useDispatch<AppDispatch>();
    const { asyncLoading, asyncData } = useSelector(
        (appState: AppState) => appState.user.detail
    );

    useEffect(() => {
        dispatch(getUser(userId));
        return () => {
            dispatch(resetUser());
        };
    }, [dispatch, userId]);

    return (
        <>
            <SectionBar
                firstName={asyncData?.firstName}
                lastName={asyncData?.lastName}
            />
            {asyncLoading && <Loading />}
            <DataContainer>
                {asyncData ? (
                    <UserInfo
                        firstName={asyncData.firstName}
                        lastName={asyncData.lastName}
                        email={asyncData.email}
                    />
                ) : (
                    <Typography variant="h5">Usuario no encontrado</Typography>
                )}
            </DataContainer>
        </>
    );
};

export default User;
