import React, { useContext } from "react";
import Header from "./Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <div className="cart">
        <div className="cart__left">
          <div className="cart__title">Cart</div>
          <div className="cart__list">
            {cartItems.map((item) => (
              <CartItem name={item.name} image={item.image} />
            ))}
          </div>
        </div>
        <div className="cart__right">
          <div className="cart__sub-total">
            <p>Subtotal</p>
            <span>$100</span>
          </div>
          <div className="cart__discount">
            <p>Discount</p>
            <span>-$16</span>
          </div>
          <div className="cart__tax">
            <p>Tax</p>
            <span>+$14</span>
          </div>
          <div className="cart__total">
            <p>Total</p>
            <span>$80</span>
          </div>
          <button>Continue Shopping</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
