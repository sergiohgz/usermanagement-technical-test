import styled from '@emotion/styled';
import {
    AppBar as MuiAppBar,
    Button,
    Grid,
    Hidden,
    IconButton,
    Theme,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import React, { FC, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import routes from '../../config/routes';
import { logout } from '../../store/login';
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

const App: FC = () => {
    const dispatch = useDispatch();

    const handleLogout = (): void => {
        dispatch(logout());
    };

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Grid container justify="space-between" alignItems="center">
                        <Typography
                            component={HomeLink}
                            to={routes.home}
                            variant="h6"
                            color="inherit"
                        >
                            App
                        </Typography>
                        <>
                            <Hidden xsDown>
                                <Button
                                    onClick={() => handleLogout()}
                                    color="inherit"
                                    startIcon={<ExitToApp />}
                                >
                                    Cerrar sesión
                                </Button>
                            </Hidden>
                            <Hidden smUp>
                                <IconButton
                                    onClick={() => handleLogout()}
                                    color="inherit"
                                >
                                    <ExitToApp />
                                </IconButton>
                            </Hidden>
                        </>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Redirect exact from={routes.app} to={routes.users} />
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
};

export default App;
