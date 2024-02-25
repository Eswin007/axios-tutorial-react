import React, { useContext } from "react";
import logo from "../img/logo.svg";
import MenuLink from "./MenuLink";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        {cartCtx.menuItems.map((link) => {
          return <MenuLink dishName={link} key={link} />;
        })}
      </div>

      <button className="btn-cart">Cart(0)</button>
    </div>
  );
};

export default Header;
