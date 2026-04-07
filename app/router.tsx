import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout";
import { ErrorPage } from "./pages/ErrorPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const LotPage = lazy(() => import("./pages/LotPage"));

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
      errorElement: <ErrorPage />,
      // loader: TODO
    },
    {
      path: 'about',
      element: <AboutPage />,
    },
    {
      path: 'favorites',
      element: <FavoritesPage />,
    },
    {
      path: 'lot/:id',
      element: <LotPage />,
      // loader: TODO
    },
  ],
}]);

export function Router() {
  return <RouterProvider router={router} />;
}