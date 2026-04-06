import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage/index.tsx";
import { FavoritesPage } from "./pages/FavoritesPage";
import { LotPage } from "./pages/LotPage";

export const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
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
    },
  ],
}]);