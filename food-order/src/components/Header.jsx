import React from "react";
import logo from "../img/logo.svg";

const Header = ({ fetchData }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <ul className="menu">
        <li>
          <a onClick={() => fetchData("pizza")}>Pizza</a>
        </li>
        <li>
          <a onClick={() => fetchData("pasta")}>Pasta</a>
        </li>
        <li>
          <a onClick={() => fetchData("salads")}>salads</a>
        </li>
        <li>
          <a onClick={() => fetchData("dessert")}>dessert</a>
        </li>
        <li>
          <a onClick={() => fetchData("drinks")}>drinks</a>
        </li>
        <li>
          <a onClick={() => fetchData("sauces")}>sauces</a>
        </li>
        <li>
          <a onClick={() => fetchData("sides")}>sides</a>
        </li>
      </ul>
      <button className="btn-cart">Cart(0)</button>
    </div>
  );
};

export default Header;
