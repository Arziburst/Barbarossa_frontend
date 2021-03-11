// Core
import { combineReducers } from 'redux';

// Reducers
import { togglersReducer as togglers } from '../../bus/client';

export const rootReducer = combineReducers({
    togglers,
});

export type AppState = ReturnType<typeof rootReducer>;
