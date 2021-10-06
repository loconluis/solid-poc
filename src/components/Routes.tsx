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
  {
    path: '/store',
    component: lazy(() => import('./CreateStore')),
  },
  // {
  //   path: '/memo',
  //   component: lazy(() => import('./Memo')),
  // },
  // {
  //   path: '/todo',
  //   component: lazy(() => import('./TodoApp')),
  // },
  // {
  //   path: '/fetch',
  //   component: lazy(() => import('./Fetch')),
  // },
];

const RoutesProvider = () => {
  const Routes = useRoutes(routes);

  return <Routes />;
};

export default RoutesProvider;
