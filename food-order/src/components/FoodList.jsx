import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ dishes }) => {
  return (
    <div className="food-list">
      {dishes?.map((dish) => {
        return (
          <FoodItem
            key={dish.id}
            name={dish.name}
            image={dish.image}
            price={dish.price}
          />
        );
      })}
    </div>
  );
};

export default FoodList;
