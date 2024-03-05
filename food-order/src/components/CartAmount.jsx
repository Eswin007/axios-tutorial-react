import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const CartAmount = () => {
  const { cartItems, subTotal } = useContext(CartContext);

  const findPercent = (part, whole) => {
    return (part / 100) * whole;
  };

  const discount = findPercent(12, subTotal);
  const discountedTotal = subTotal - discount;
  const tax = findPercent(5, subTotal);
  const total = discountedTotal + tax;

  return (
    <div className="cartAmnt">
      <div className="cartAmnt__calc sub-total">
        <p>Subtotal</p>
        <span>${subTotal.toFixed(2)}</span>
      </div>
      <div className="cartAmnt__calc discount">
        <p>Discount(12%):</p>
        <span> ${discount.toFixed(2)}</span>
      </div>
      <div className="cartAmnt__calc tax">
        <p>Tax: </p>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="cartAmnt__calc total">
        <p>Total</p>
        <span>${total.toFixed(2)}</span>
      </div>
      <button>Continue Shopping</button>
    </div>
  );
};

export default CartAmount;
