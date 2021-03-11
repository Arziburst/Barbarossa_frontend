
// Core
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
    ApolloProvider,
    ApolloClient,
    NormalizedCacheObject,
} from '@apollo/client';

// App initializaion
import {
    getApolloClient,
    store as reduxStore,
    persistor as reduxPersistor,
    history as routerHistory,
    // registerServiceWorker,
} from './init';

// App
import { App } from './view/App';

// Elements
import { Spinner } from './view/elements';

// Assets
import { initIconsLibrary } from './assets';

initIconsLibrary();

const Root = () => {
    const [ client, setClient ] = useState<ApolloClient<NormalizedCacheObject>>();

    useEffect(() => {
        getApolloClient().then((client) => void setClient(client));
    }, []);

    if (!client) {
        return <Spinner />;
    }

    return (
        <ApolloProvider client = { client }>
            <ReduxProvider store = { reduxStore }>
                <PersistGate
                    loading = { null }
                    persistor = { reduxPersistor }>
                    <Router history = { routerHistory }>
                        <App />
                    </Router>
                </PersistGate>
            </ReduxProvider>
        </ApolloProvider>
    );
};

render(<Root />, document.getElementById('app'));

// if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//     registerServiceWorker();
// }
