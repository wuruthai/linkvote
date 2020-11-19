import { HomePage } from 'pages';
import { ROUTE_PATHS } from 'constant';

const homeRoute = {
  path: ROUTE_PATHS.HOME,
  key: 'APP_ROOT',
  exact: true,
  component: HomePage,
};

export default homeRoute;
