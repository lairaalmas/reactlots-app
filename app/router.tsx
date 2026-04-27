import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { ErrorPage } from './pages/ErrorPage';
import { lotPageLoader, homePageLoader } from './utils/loaders';

const HomePage = lazy(() => import('./pages/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const LotPage = lazy(() => import('./pages/LotPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homePageLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
      {
        path: 'lots/:id',
        element: <LotPage />,
        loader: lotPageLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
