// Core
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

// Init
import {
    getApolloClient,
    store as reduxStore,
    history as routerHistory,
    registerServiceWorker,
} from './init';

// View
import { App } from './view';

// Assets
import { initIconsLibrary } from './assets';

initIconsLibrary();

const Root = () => {
    return (
        <ApolloProvider client = { getApolloClient() }>
            <ReduxProvider store = { reduxStore }>
                <Router history = { routerHistory }>
                    <App />
                </Router>
            </ReduxProvider>
        </ApolloProvider>
    );
};

render(<Root />, document.getElementById('app'));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    registerServiceWorker();
}
