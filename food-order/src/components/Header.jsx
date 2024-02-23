import React, { useContext } from "react";
import logo from "../img/logo.svg";
import MenuLink from "./MenuLink";

const Header = ({ fetchData }) => {
  const menuItems = [
    "pizza",
    "pasta",
    "salads",
    "dessert",
    "drinks",
    "sauces",
    "sides",
  ];
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        {menuItems.map((link) => {
          return <MenuLink dishName={link} />;
        })}
      </div>

      <button className="btn-cart">Cart(0)</button>
    </div>
  );
};

export default Header;
