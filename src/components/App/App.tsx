import styled from '@emotion/styled';
import {
    AppBar as MuiAppBar,
    Theme,
    Toolbar,
    Typography,
} from '@material-ui/core';
import React, { FC, lazy, Suspense } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import routes from '../../config/routes';
import Loading from '../common/Loading';

const Home = lazy(() => import('../Home'));
const NotFound = lazy(() => import('../NotFound'));

const AppContainer = styled('div')<{}, Theme>(({ theme }) => ({
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.background.default,
}));

const AppBar = styled(MuiAppBar)<{}, Theme>(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
}));

const HomeLink = styled(Link)({
    textDecoration: 'none',
});

const App: FC = () => (
    <AppContainer>
        <AppBar position="sticky">
            <Toolbar>
                <Typography
                    component={HomeLink}
                    to={routes.home}
                    variant="h6"
                    color="inherit"
                >
                    App
                </Typography>
            </Toolbar>
        </AppBar>
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route exact path={routes.home}>
                    <Home />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Suspense>
    </AppContainer>
);

export default App;
