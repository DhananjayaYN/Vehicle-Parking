import React from 'react';
import './Cart.css';
import CartItem from './CartItem';

export default function Cart({ onClose }) {
  return (
    <div className="cart-modal">
      <div className="cart-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Cart</h2>
        <div className="header">
          <div>Date</div>
          <div>In Time</div>
          <div>Out Time</div>
        </div>
        <CartItem />
        {/* <p>Your cart is currently empty.</p> */}
      </div>
    </div>
  );
}
