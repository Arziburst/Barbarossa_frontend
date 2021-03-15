// Core
import { lazy } from 'react';

export const Lessons = lazy(() => import(/* webpackChunkName: "Lessons" */ './Lessons'));
export const Tests = lazy(() => import(/* webpackChunkName: "Tests" */ './Tests'));
