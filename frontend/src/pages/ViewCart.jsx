import React from 'react';
import { Modal } from '../components/Modal';

export const ViewCart = ({ isOpen, onClose, cartItems }) => {
  return (
    <Modal isOpen={isOpen} setVisibility={onClose} fullScreen={true}>
      <div className="view-cart-content">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
};