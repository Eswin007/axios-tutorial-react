import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const MenuLink = ({ dishName }) => {
  const cartCtx = useContext(CartContext);

  if (dishName === dishName) {
    cartCtx.setMenuIsActive(true);
  }

  return (
    <a
      className={`${cartCtx.menuIsActive ? "active" : ""}`}
      onClick={() => cartCtx.fetchData(dishName)}
    >
      {dishName}
    </a>
  );
};

export default MenuLink;
