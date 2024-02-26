import { createBrowserRouter } from "react-router-dom";

import FoodList from "./components/FoodList";
import Cart from "./components/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FoodList />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
