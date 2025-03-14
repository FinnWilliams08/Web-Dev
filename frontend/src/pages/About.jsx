import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="about-container">
      <section className="about-hero">
        <h2>About Our Kitchen</h2>
        <p className="tagline">
          Nourishing Our Community, One Meal at a Time
        </p>
      </section>

      <section className="about-story">
        <h3>Our Story</h3>
        <p>
          Founded with love and care, our kitchen is dedicated to providing
          healthy, delicious meals to elderly members of our community. We
          believe that everyone deserves nutritious food made from fresh,
          high-quality ingredients. Our mission is to bring warmth and comfort
          through every meal we prepare and deliver.
        </p>
      </section>

      <section className="about-values">
        <h3>Our Values</h3>
        <div className="values-grid">
          <div className="value-item">
            <h4>Freshness</h4>
            <p>
              We use locally sourced, fresh ingredients to prepare balanced and
              wholesome meals.
            </p>
          </div>
          <div className="value-item">
            <h4>Quality</h4>
            <p>
              Every meal is carefully prepared by our skilled chefs to ensure
              the highest quality and taste.
            </p>
          </div>
          <div className="value-item">
            <h4>Community</h4>
            <p>
              We are more than just a food service—we are a community dedicated
              to supporting and caring for our elderly neighbors.
            </p>
          </div>
          <div className="value-item">
            <h4>Compassion</h4>
            <p>
              Every meal we deliver is a gesture of kindness, ensuring no one
              in our community goes hungry or feels alone.
            </p>
          </div>
        </div>
      </section>

      <section className="about-process">
        <h3>How It Works</h3>
        <div className="process-steps">
          <div className="step">
            <h4>1. Meal Planning</h4>
            <p>
              Our nutritionists and chefs create healthy, well-balanced menus
              tailored to dietary needs.
            </p>
          </div>
          <div className="step">
            <h4>2. Fresh Preparation</h4>
            <p>
              We prepare meals daily using high-quality, fresh ingredients to
              ensure flavor and nutrition.
            </p>
          </div>
          <div className="step">
            <h4>3. Packaging with Care</h4>
            <p>
              Every meal is packaged safely to maintain freshness and delivered
              ready to enjoy.
            </p>
          </div>
          <div className="step">
            <h4>4. Reliable Delivery</h4>
            <p>
              Our dedicated team ensures meals arrive on time, bringing warmth
              and nourishment to your doorstep.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
