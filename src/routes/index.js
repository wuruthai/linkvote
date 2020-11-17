import React from 'react';
import homeRoute from './home.route.js';
/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */

const routes = [
  homeRoute,
  // {
  //   path: '/page',
  //   key: 'APP_PAGE',
  //   exact: true,
  //   component: () => <h1>App Page</h1>,
  // },
];

export default routes;
