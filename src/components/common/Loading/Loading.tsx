import styled from '@emotion/styled';
import { CircularProgress } from '@material-ui/core';
import React, { FC } from 'react';

const LoadingContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
});

const Loading: FC = () => (
    <LoadingContainer>
        <CircularProgress size={80} color="secondary" />
    </LoadingContainer>
);

export default Loading;
