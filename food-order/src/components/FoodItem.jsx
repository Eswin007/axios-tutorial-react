import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const FoodItem = ({ image, name, price, onClick }) => {
  const cartCtx = useContext(CartContext);
  return (
    <div className="dish">
      <img className="dish__img" src={image} alt="" />
      <div className="dish__details">
        <div className="dish__name">{name}</div>
        <div className="dish__price">{`$${price.toFixed(2)}`}</div>
      </div>
      <div className="btn-wrap">
        <button className="btn btn-secondary">Save for later</button>
        <button className="btn btn-primary" onClick={onClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
