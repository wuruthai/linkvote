import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */

const ROUTES = [
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

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export function RenderRoutes({ routes }) {
  return (
    <>
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    </>
  );
}

export default ROUTES;
