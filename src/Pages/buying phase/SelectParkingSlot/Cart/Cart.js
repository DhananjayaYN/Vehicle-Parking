import React from 'react';
import { useState, useEffect, useContext } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import { OrderContext } from '../../../../context/OrderContext';

export default function Cart({ onClose, onRemove, onClear, handleCheckout }) {

  const { orders } = useContext(OrderContext);

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="head">
          <button className="close-button" onClick={onClose}>Close</button>
          <h2 className='heading'>My Cart</h2>
        </div>
        {orders.length > 0 && (
          <div className="header">
            <div>Date</div>
            <div>In Time</div>
            <div>Out Time</div> 
          </div>)
        }
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <CartItem 
              key={index}
              selectedDate={item.selectedDate} 
              inTime={item.inTime} 
              outTime={item.outTime} 
              onDelete={() => onRemove(index)}
            />
          ))
        ) : (
          <p>Your cart is currently empty.</p>
        )}

        <div className="control-buttons">
          <button className="clear-button" onClick={() => onClear()}>Clear Cart</button>
          <button className="checkout-button" onClick={() => handleCheckout()}>Checkout</button>
        </div>

      </div>
    </div>
  );
}
