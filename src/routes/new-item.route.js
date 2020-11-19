import { NewItemPage } from 'pages';
import { ROUTE_PATHS } from 'constant';

const homeRoute = {
  path: ROUTE_PATHS.NEW,
  key: 'new_item',
  exact: true,
  component: NewItemPage,
};

export default homeRoute;
