import logo from "./logo.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import "./styles/main.scss";
import { CartContext } from "./context/CartContext";

import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";

const baseURL = "http://localhost:4000";

const App = () => {
  const [dishes, setDishes] = useState([]);
  const [cart, setCart] = useState();
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("pizza");

  const menuItems = [
    "pizza",
    "pasta",
    "salads",
    "dessert",
    "drinks",
    "sauces",
    "sides",
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FoodList dishes={dishes} />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  const fetchData = async (foodItem) => {
    const foodList = await axios.get(`${baseURL}/${foodItem}`);
    setDishes(foodList.data);
    setActiveMenu(foodItem);
  };
  useEffect(() => {
    fetchData("pizza");
  }, []);
  return (
    <div>
      <CartContext.Provider
        value={{
          dishes,
          menuIsActive,
          setMenuIsActive,
          fetchData,
          menuItems,
          activeMenu,
        }}
      >
        <Header />
        <RouterProvider router={router} />

        {/* <FoodList dishes={dishes} /> */}
      </CartContext.Provider>
    </div>
  );
};

export default App;
