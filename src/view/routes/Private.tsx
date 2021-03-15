// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Lessons, Tests } from '../pages';

// Paths
import * as paths from './paths';

export const Private: FC = () => {
    return (
        <Switch>
            <Route
                exact
                path = { paths.LESSONS }>
                <Lessons />
            </Route>

            <Route
                exact
                path = { paths.TESTS }>
                <Tests />
            </Route>

            <Redirect to = { paths.LESSONS } />
        </Switch>
    );
};
