import React from 'react';
import './Main.css'; // Import the CSS file
import playersImage from '../assets/players.png'; // Import the new image
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Main = () => {
  return (
    <div className="maincontainer">     
      <hr />
      <div className="content">
        <p>
          At Club Retros, we are passionate about football and dedicated to bringing you the largest collection of retro football shirts in the world! Whether you're a die-hard fan or just love the nostalgia of classic kits, we have something for everyone.
        </p>
        <h2>Our Collection</h2>
        <p>
          Explore our extensive range of iconic shirts from the 80s, 90s, and beyond. We stock classics from UK teams, European giants, other teams from around the world and international favourites.
        </p>
        <p>
          We offer free international delivery on all orders! For more details on our processing and delivery times.
        </p>
        <p>
          You can view our size guide. If you have any questions not answered on our website, please head to our <a href="/contact">contact page</a> to fill in our enquiry form.
        </p>
      </div>
      <div className="image-container">
        <img src={playersImage} alt="Football Players" className="players-image" />
        <Link to="/shirts" className="browse-button">Browse Shirts</Link>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Club Retros. All rights reserved.</p>
          <p>
            Follow us on:
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> |
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> |
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
          </p>
          <p>
            <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};