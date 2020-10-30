import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {RenderRoutes} from 'components'
/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */

const routes = [
  {
    path: '/',
    key: 'APP',
    component: RenderRoutes,
    routes: [
      {
        path: '/',
        key: 'APP_ROOT',
        exact: true,
        component: () => <h1>App Index</h1>,
      },
      {
        path: '/page',
        key: 'APP_PAGE',
        exact: true,
        component: () => <h1>App Page</h1>,
      },
    ],
  },
];

export default routes;
