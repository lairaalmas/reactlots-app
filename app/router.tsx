import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getLotById } from "../api/requests/getLots";

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
      path: 'lots/:id',
      element: <LotPage />,
      loader: async ({ params }) => {
        const { id } = params;
        if (!id) {
          throw new Response("Lot id is required", { status: 400 });
        }
        return getLotById(id);
      }
    },
  ],
}]);

export function Router() {
  return <RouterProvider router={router} />;
}