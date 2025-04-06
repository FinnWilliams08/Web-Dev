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
      <div className="filter-dropdown">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="">All</option>
          <option value="Liverpool">Liverpool</option>
          <option value="Arsenal">Arsenal</option>
          <option value="Chelsea">Chelsea</option>
          <option value="Huddersfield">Huddersfield</option>
          <option value="Leeds">Leeds</option>
          <option value="Austria">Austria</option>
          <option value="Germany">Germany</option>
          <option value="Dortmund">Dortmund</option>
        </select>
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