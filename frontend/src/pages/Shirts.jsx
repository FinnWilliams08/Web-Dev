import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { sampleProductsList } from '../assets/sampleProducts';
import './Shirts.css'; // Import the CSS file

export const Shirts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  const filteredProducts = sampleProductsList.filter(product => {
    const matchesSearchQuery = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter ? product.title.toLowerCase().includes(filter.toLowerCase()) : true;
    return matchesSearchQuery && matchesFilter;
  });

  return (
    <div className="meals-container">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="Search Shirts" />
      <div className="filter-buttons">
        <button onClick={() => setFilter('')}>All</button>
        <button onClick={() => setFilter('Liverpool')}>Liverpool</button>
        <button onClick={() => setFilter('Arsenal')}>Arsenal</button>
        <button onClick={() => setFilter('Chelsea')}>Chelsea</button>
      </div>
      <h5>Shirts</h5>
      <div className="product-cards-container">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};