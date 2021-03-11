// Core
import { lazy } from 'react';

export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Lessons = lazy(() => import(/* webpackChunkName: "Lessons" */ './Lessons'));
