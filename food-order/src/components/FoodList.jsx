import React, { useContext } from "react";
import FoodItem from "./FoodItem";
import Header from "./Header";
import { CartContext } from "../context/CartContext";

const FoodList = () => {
  const { dishes, addToCart } = useContext(CartContext);

  return (
    <>
      <div className="food-list">
        {dishes?.map((dish) => {
          return (
            <FoodItem
              key={dish.id}
              name={dish.name}
              image={dish.image}
              price={dish.price}
              onClick={() => addToCart(dish)}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodList;
