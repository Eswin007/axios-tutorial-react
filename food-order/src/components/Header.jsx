import React, { useContext } from "react";
import logo from "../img/logo.svg";
import MenuLink from "./MenuLink";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { menuItems, cartItems } = useContext(CartContext);
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        {menuItems?.map((link) => {
          return <MenuLink dishName={link} key={link} />;
        })}
      </div>

      <Link to={"/cart"} className="btn-cart">
        Cart ({cartItems.length})
      </Link>
    </div>
  );
};

export default Header;
