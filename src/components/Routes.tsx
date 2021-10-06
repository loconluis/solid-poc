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
    path: '/signal',
    component: lazy(() => import('./Increment')),
  },
  {
    path: '/effect',
    component: lazy(() => import('./Effect')),
  },
];

const RoutesProvider = () => {
  const Routes = useRoutes(routes);

  return <Routes />;
};

export default RoutesProvider;
