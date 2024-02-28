import React from "react";

const CartItem = ({ name, image, price }) => {
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img src={image} alt="" />
      </div>
      <div className="cart__item-name">{name}</div>
      <div className="cart__item-price">{price}</div>

      <div className="cart__item-count">
        <div className="cart__item-count-btn">-</div>
        <input
          type="text"
          className="cart__item-count-input"
          placeholder="count"
        />
        <div className="cart__item-count-btn">+</div>
      </div>
      <button className="cart__item-del">Delete</button>
    </div>
  );
};

export default CartItem;
