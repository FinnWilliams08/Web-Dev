import React from 'react';
import './Main.css'; // Import the CSS file

export const Main = () => {
  return (
    <div className="container">
      <h1>CLUB RETROS</h1>
      <hr />
      <div className="content">
        <h2>Welcome to Club Retros!</h2>
        <p>
          At Club Retros, we are passionate about football and dedicated to bringing you the largest collection of retro football shirts in the world! Whether you're a die-hard fan or just love the nostalgia of classic kits, we have something for everyone.
        </p>
        <h2>Our Collection</h2>
        <p>
          Explore our extensive range of iconic shirts from the 80s, 90s, and beyond. We stock classics from UK teams, European giants, other teams from around the world and international favourites.
        </p>
        <p>
          We offer free international delivery on all orders! For more details on our processing and delivery times, please read our <a href="/shipping">shipping page</a>.
        </p>
        <p>
          You can view our size guide <a href="/size-guide">here</a>. If you have any questions not answered on our website, please head to our <a href="/contact">contact page</a> to fill in our enquiry form.
        </p>
      </div>
    </div>
  );
};