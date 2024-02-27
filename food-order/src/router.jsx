import { createBrowserRouter } from "react-router-dom";

import FoodList from "./components/FoodList";
import Cart from "./components/Cart";
import MainLayout from "./components/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>404, Page not found</div>,
    children: [
      {
        path: "/foodList",
        element: <FoodList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
