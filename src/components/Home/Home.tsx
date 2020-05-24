import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';
import { getHome, resetHome } from '../../store/home';
import { AppState } from '../../store/store';
import { AppDispatch } from '../../store/types';
import Loading from '../common/Loading';

const Home: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { asyncLoading, asyncData } = useSelector(
        (appState: AppState) => appState.home
    );

    useEffect(() => {
        dispatch(getHome());
        return () => {
            dispatch(resetHome());
        };
    }, [dispatch]);

    return (
        <>
            {asyncLoading ? (
                <Loading />
            ) : (
                <div>
                    {asyncData ? (
                        <Typography variant="body1">
                            {asyncData.message}
                        </Typography>
                    ) : (
                        <Typography variant="body2">No data found</Typography>
                    )}
                </div>
            )}
        </>
    );
};

export default Home;
