import '@emotion/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import Snackbar from './components/Snackbar';
import Providers from './config/Providers';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Providers>
        <App />
        <Snackbar />
    </Providers>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
