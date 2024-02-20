import React from "react";

const FoodItem = ({ image, name, price }) => {
  return (
    <div className="dish">
      <img className="dish__img" src={image} alt="" />
      <div className="dish__details">
        <div className="dish__name">{name}</div>
        <div className="dish__price">{`$${price}`}</div>
      </div>
      <div className="btn-wrap">
        <button className="btn btn-secondary">Save for later</button>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodItem;
