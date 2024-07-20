import { createBrowserRouter } from "react-router-dom";
import { AboutPage, Home, News, Properties, PropertyPage } from "../screens";
import { Header } from "../ui-components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/properties", element: <Properties /> },

      { path: "/news", element: <News /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
  { path: "/property/:id", element: <PropertyPage /> },
]);
