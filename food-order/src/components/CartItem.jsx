import React, { useContext } from "react";
import icoVeg from "../img/ico-veg-symbol.svg";
import icoSpicy from "../img/spicy.png";
import { CartContext } from "../context/CartContext";

const CartItem = ({ name, image, price, vegetarian, spicy, id }) => {
  const { deleteCartItem } = useContext(CartContext);
  console.log(vegetarian);
  return (
    <div className="cartItem">
      <div className="cartItem__img">
        <img src={image} alt="" />
      </div>
      <div className="cartItem__detail">
        <div className="cartItem__type">
          {vegetarian && <img src={icoVeg} alt="" />}
          {spicy && <img src={icoSpicy} alt="" />}
        </div>
        <div className="cartItem__name">{name}</div>
        <div className="cartItem__count">
          <span className="cartItem__count-label">Quantity:</span>
          <div className="cartItem__count-btn">-</div>
          <input
            type="text"
            className="cartItem__count-input"
            placeholder="01"
          />
          <div className="cartItem__count-btn">+</div>
        </div>
      </div>
      <div className="cartItem__control">
        <div className="cartItem__price">${price}</div>
        <button
          className="cartItem__del btn"
          onClick={() => deleteCartItem(id, name)}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
