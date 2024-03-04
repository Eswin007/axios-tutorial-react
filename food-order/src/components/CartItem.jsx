import React, { useContext, useState } from "react";
import icoVeg from "../img/ico-veg-symbol.svg";
import icoSpicy from "../img/spicy.png";
import { CartContext } from "../context/CartContext";

const CartItem = ({ name, image, price, vegetarian, spicy, id, index }) => {
  const { deleteCartItem, cartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const onChangeHandler = (e) => {
    setQuantity(e.target.value);
  };

  const addQuantity = (id, index) => {
    const indexedItem = cartItems.find((item) => item.id === id);
    console.log(indexedItem);
    if (indexedItem === cartItems[index]) {
      setQuantity((prev) => prev + 1);
      indexedItem.quantity = quantity + 1;
    } else {
      alert("hi");
    }
  };

  const minusQuantity = (id, index) => {
    const indexedItem = cartItems.find((item) => item.id === id);
    console.log(indexedItem);
    if (indexedItem === cartItems[index]) {
      setQuantity((prev) => prev - 1);
      indexedItem.quantity = quantity - 1;
    } else {
      alert("hi");
    }
  };
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
          <button
            className="cartItem__count-btn"
            onClick={() => minusQuantity(id, index)}
            disabled={quantity === 1}
          >
            -
          </button>
          <input
            type="text"
            className="cartItem__count-input"
            value={+quantity}
            min={1}
            onChange={(e) => onChangeHandler(e)}
          />
          <button
            className="cartItem__count-btn"
            onClick={() => addQuantity(id, index)}
          >
            +
          </button>
        </div>
      </div>
      <div className="cartItem__control">
        <div className="cartItem__price">${price.toFixed(2)}</div>
        <button
          className="cartItem__del btn"
          onClick={() => deleteCartItem(id)}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
