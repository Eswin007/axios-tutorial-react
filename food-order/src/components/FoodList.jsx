import React, { useContext } from "react";
import FoodItem from "./FoodItem";
import Header from "./Header";
import { CartContext } from "../context/CartContext";

const FoodList = () => {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <Header />
      <div className="food-list">
        {cartCtx.dishes?.map((dish) => {
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
    </>
  );
};

export default FoodList;
