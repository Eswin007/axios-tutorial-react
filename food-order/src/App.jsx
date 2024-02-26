import logo from "./logo.svg";
import axios from "axios";
import { useEffect, useState } from "react";

import "./styles/main.scss";
import { CartContext } from "./context/CartContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const baseURL = "http://localhost:4000";

const App = () => {
  const [dishes, setDishes] = useState([]);
  const [cart, setCart] = useState();
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const menuItems = [
    "pizza",
    "pasta",
    "salads",
    "dessert",
    "drinks",
    "sauces",
    "sides",
  ];

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
        <RouterProvider router={router} />
      </CartContext.Provider>
    </div>
  );
};

export default App;
