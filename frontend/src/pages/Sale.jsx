import React from 'react';
import { SaleProductCard } from '../components/SaleProductCard';
import { saleProductsList } from '../assets/saleProducts';
import './Sale.css';

export const Sale = () => {
  const saleProducts = saleProductsList.filter(product => product.isOnSale);

  console.log(saleProducts); // Debugging line to check the filtered products

  return (
    <div className="sale-container">
      <h1>Sale</h1>
      <div className="product-cards-container">
        {saleProducts.length > 0 ? (
          saleProducts.map(product => (
            <SaleProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products on sale.</p>
        )}
      </div>
    </div>
  );
};