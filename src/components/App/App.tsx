import styled from '@emotion/styled';
import { Theme } from '@material-ui/core';
import React, { FC, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from '../../config/routes';
import { AppState } from '../../store/store';
import Loading from '../common/Loading';
import Login from '../Login';

const Router = lazy(() => import('../Router'));

const AppContainer = styled('div')<{}, Theme>(({ theme }) => ({
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.background.default,
}));

const App: FC = () => {
    const { asyncData } = useSelector((appState: AppState) => appState.login);

    const { token } = asyncData ?? {};

    return (
        <AppContainer>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path={routes.login}>
                        <Login />
                    </Route>
                    <Route path={routes.app}>
                        {token ? <Router /> : <Redirect to={routes.login} />}
                    </Route>
                    <Route>
                        <Redirect to={token ? routes.app : routes.login} />
                    </Route>
                </Switch>
            </Suspense>
        </AppContainer>
    );
};

export default App;
