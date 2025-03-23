import React, { useContext, useState } from 'react';
import { Column } from './Column';
import { Row } from './Row';
import { Image } from './Image';
import { CartContext } from '../context/CartProvider';
import { updateItemInCart } from '../utils/cartManagement';
import { ImageModal } from './ImageModal';
import './SaleProductCard.css';

export const SaleProductCard = ({ product }) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { id, title, alt, imageSource, price, availability, description } = product;

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    setCartItems((prev) => updateItemInCart("add", product, prev));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Hide the pop-up after 3 seconds
  };

  return (
    <>
      <Column className="saleproduct-card">
        <Image 
          src={imageSource} 
          alt={alt} 
          title={title} 
          className="product-image" 
          onClick={handleImageClick}
        />
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <Row className="product-info">
          <h4 className="product-price">£{price}</h4>
          {!availability && (
            <p className="out-of-stock">Out of Stock</p>
          )}
        </Row>
        <button
          className="add-to-cart-button"
          onClick={handleAddToCart}
          disabled={!availability}
        >
          Add to Cart 🛒
        </button>
      </Column>

      <ImageModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        imageSource={imageSource} 
        alt={alt} 
        title={title} 
        description={description} 
      />

      {showPopup && (
        <div className="popup-message">
          Product added to cart!
        </div>
      )}
    </>
  );
};