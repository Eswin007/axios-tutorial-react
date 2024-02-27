import React from "react";
import Header from "./Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="cart">
        <div className="cart__left">
          <div className="cart__title">Cart</div>
          <div className="cart__list">
            <div className="cart__item">
              <div className="cart__item-img">Image</div>
              <div className="cart__item-name">Pizza</div>
              <div className="cart__item-price"></div>

              <div className="cart__item-count">
                <div className="cart__item-count-btn">-</div>
                <input
                  type="text"
                  className="cart__item-count-input"
                  placeholder="count"
                />
                <div className="cart__item-count-btn">+</div>
              </div>
              <div className="cart__item-del">Delete</div>
            </div>
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
