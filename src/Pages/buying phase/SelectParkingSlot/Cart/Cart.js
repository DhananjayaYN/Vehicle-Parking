import React from 'react';
import './Cart.css';
import CartItem from './CartItem';

export default function Cart({ onClose, cartItems, onRemove, onClear }) {
  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="head">
          <button className="close-button" onClick={onClose}>Close</button>
          <h2 className='heading'>My Cart</h2>
        </div>
        {cartItems.length > 0 && (
          <div className="header">
            <div>Date</div>
            <div>In Time</div>
            <div>Out Time</div> 
          </div>)
        }
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
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
          <button className="checkout-button">Checkout</button>
        </div>

      </div>
    </div>
  );
}
