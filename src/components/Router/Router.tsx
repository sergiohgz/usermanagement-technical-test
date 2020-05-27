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

const UserList = lazy(() => import('../UserList'));
const UserDetail = lazy(() => import('../UserDetail'));
const NotFound = lazy(() => import('../NotFound'));

const AppBar = styled(MuiAppBar)<{}, Theme>(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
}));

const HomeLink = styled(Link)({
    textDecoration: 'none',
});

const App: FC = () => (
    <>
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
                <Redirect exact from={routes.home} to={routes.users} />
                <Route exact path={routes.users}>
                    <UserList />
                </Route>
                <Route exact path={routes.user}>
                    <UserDetail />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Suspense>
    </>
);

export default App;
