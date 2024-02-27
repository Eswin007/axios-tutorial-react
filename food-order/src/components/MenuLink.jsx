import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const MenuLink = ({ dishName }) => {
  const cartCtx = useContext(CartContext);

  return (
    <Link
      to={"/foodList"}
      className={cartCtx.activeMenu === dishName ? "active" : ""}
      onClick={() => cartCtx.fetchData(dishName)}
    >
      {dishName}
    </Link>
  );
};

export default MenuLink;
