import { lazy } from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import SidebarNavigation from './views/layouts/SidebarNavigation';

const AccountsPage = lazy(() => import('./views/accounts/AccountsListPage'));
const CampaignsPage = lazy(() => import('./views/campaigns/CampaignsListPage'));
const ProfilesPage = lazy(() => import('./views/profiles/ProfilesListPage'));
const AccountPage = lazy(() => import('./views/accounts/AccountPage'));
const CampaignPage = lazy(() => import('./views/campaigns/CampaignPage'));
const ProfilePage = lazy(() => import('./views/profiles/ProfilePage'));
const NotFound = lazy(() => import('./views/NotFound'));

const App = () => {
  const router = createBrowserRouter([
    {
      path: '*',
      Component: SidebarNavigation,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          path: 'accounts',
          element: <AccountsPage />
        },
        {
          path: 'accounts/:id',
          element: <AccountPage />
        },
        {
          path: 'campaigns',
          element: <CampaignsPage />
        },
        {
          path: 'campaigns/:id',
          element: <CampaignPage />
        },
        {
          path: 'profiles',
          element: <ProfilesPage />
        },
        {
          path: 'profiles/:id',
          element: <ProfilePage />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])

  return (
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true }}
    />
  );
}

export default App
