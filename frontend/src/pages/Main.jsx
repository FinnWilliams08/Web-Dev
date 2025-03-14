import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import eatImage from '../assets/eating.png'; // Import the image
import './Main.css'; // Import the CSS file

export const Main = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleButtonClick = () => {
    navigate('/meals'); // Navigate to the Meals page
  };

  return (
    <div className="container">
      <div className="hero-section" style={{ backgroundImage: `url(${eatImage})` }}>
        <div>
          <h1>Delicious Meals Delivered with Care</h1>
          <p>Bringing comfort and nutrition right to your doorstep</p>
          <button onClick={handleButtonClick}>Browse Our Menu</button>
        </div>
      </div>
    </div>
  );
};