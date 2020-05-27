import styled from '@emotion/styled';
import { Theme } from '@material-ui/core';
import React, { FC } from 'react';

import Router from '../Router';

const AppContainer = styled('div')<{}, Theme>(({ theme }) => ({
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.background.default,
}));

const App: FC = () => (
    <AppContainer>
        <Router />
    </AppContainer>
);

export default App;
