import logo from "./logo.svg";
import axios from "axios";
import { useEffect, useState } from "react";

import "./styles/main.scss";
import { CartContext } from "./context/CartContext";
import { RouterProvider, useParams } from "react-router-dom";
import { router } from "./router";
import Header from "./components/Header";

const baseURL = "http://localhost:4000";

const App = () => {
  const [dishes, setDishes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [quantity, setQuantity] = useState(1);
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
  const addToCart = (item) => {
    const newCartItems = [
      {
        name: item.name,
        id: `${item.id} + ${item.image} + ${Math.random()}`,
        image: item.image,
        price: item.price,
        vegetarian: item.vegetarian,
        spicy: item.spicy,
        index: item.index,
      },
      ...cartItems,
    ];
    setCartItems(newCartItems);
  };

  const deleteCartItem = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const subTotal = cartItems.reduce(
    (acc, cur) => acc + cur.price * quantity,
    0
  );

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
          cartItems,
          addToCart,
          deleteCartItem,
          setCartItems,
          subTotal,
          setQuantity,
          quantity,
        }}
      >
        <RouterProvider router={router} />
      </CartContext.Provider>
    </div>
  );
};

export default App;
