import React, { useContext } from "react";
import Header from "./Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import CartAmount from "./CartAmount";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className="cart-wrap">
        <div className="cart-left">
          <div className="cart-title">Cart</div>
          <div className="cart__list">
            {cartItems.length !== 0 ? (
              cartItems.map((item, index) => (
                <CartItem
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  key={item.id}
                  id={item.id}
                  vegetarian={item.vegetarian}
                  spicy={item.spicy}
                  index={index}
                  qty={item.quantity}
                />
              ))
            ) : (
              <div className="empty-cart">Your Cart is empty :(</div>
            )}
          </div>
        </div>

        {cartItems.length !== 0 && (
          <div className="cart-right">
            <CartAmount />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
