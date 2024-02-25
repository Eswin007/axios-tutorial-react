import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const MenuLink = ({ dishName }) => {
  const cartCtx = useContext(CartContext);

  return (
    <a
      className={cartCtx.activeMenu === dishName ? "active" : ""}
      onClick={() => cartCtx.fetchData(dishName)}
    >
      {dishName}
    </a>
  );
};

export default MenuLink;
