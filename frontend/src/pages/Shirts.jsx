import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { sampleProductsList } from '../assets/sampleProducts';
import './Shirts.css'; // Import the CSS file

export const Shirts = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = sampleProductsList.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="meals-container">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <h5>Shirts</h5>
      <div className="product-cards-container">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  );
};