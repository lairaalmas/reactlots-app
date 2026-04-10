import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getLotById } from "../api/requests/getLots";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
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