import {
    CssBaseline,
    ThemeProvider as MaterialUiThemeProvider,
} from '@material-ui/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../store';
import theme from './theme';

const Providers: FC = ({ children }) => (
    <MaterialUiThemeProvider theme={theme}>
        <CssBaseline>
            <EmotionThemeProvider theme={theme}>
                <Provider store={store}>
                    <BrowserRouter>{children}</BrowserRouter>
                </Provider>
            </EmotionThemeProvider>
        </CssBaseline>
    </MaterialUiThemeProvider>
);

export default Providers;
