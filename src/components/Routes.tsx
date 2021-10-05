import { lazy } from 'solid-js';
import { useRoutes } from 'solid-app-router';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./Navigation')),
  },
  {
    path: '/first-component',
    component: lazy(() => import('./FirstComponent')),
  },
  {
    path: '/increment',
    component: lazy(() => import('./Increment')),
  },
];

const RoutesProvider = () => {
  const Routes = useRoutes(routes);

  return <Routes />;
};

export default RoutesProvider;
