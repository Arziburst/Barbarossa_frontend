// Core
import { onError } from '@apollo/client/link/error';

// Instruments
// import { store } from '../../@init';
// import { togglerCreatorAction } from '../../@init/redux/togglers/index';
// import { getAccessToken } from './getAccessToken';

export const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
        for (let error of graphQLErrors) {
            console.log('🚀 graphQLErrors', error);
        }

        return;
    }

    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }

    return void forward(operation);
});

