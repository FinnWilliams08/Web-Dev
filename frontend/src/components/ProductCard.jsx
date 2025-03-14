import { Column } from "./Column";
import { Row } from "./Row";
import { Image } from "./Image";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { updateItemInCart } from "../utils/cartManagement";
import { ImageModal } from "./ImageModal";
import './ProductCard.css'; // Import the CSS file

export const ProductCard = ({ product }) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id, title, alt, imageSource, price, availability, description } = product;

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Column className="product-card">
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
          <h4>£{price}</h4>
          {!availability && (
            <p className="out-of-stock">Out of Stock</p>
          )}
        </Row>
        <button
          className="add-to-cart-button"
          onClick={() =>
            setCartItems((prev) => updateItemInCart("add", product, prev))
          }
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
    </>
  );
};