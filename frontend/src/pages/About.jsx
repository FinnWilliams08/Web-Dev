import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="about-container">
      <section className="about-hero">
        <h2>About Throwback Threads</h2>
        <p className="tagline">
          Preserving Football History, One Shirt at a Time
        </p>
      </section>

      <section className="about-story">
        <h3>Our Story</h3>
        <p>
          Founded by passionate football enthusiasts in 2025, Throwback Threads has become the premier destination for vintage football shirt collectors and fans. We specialise in sourcing and offering authentic vintage football shirts that tell the stories of memorable moments in football history.
        </p>
      </section>

      <section className="about-values">
        <h3>Our Values</h3>
        <div className="values-grid">
          <div className="value-item">
            <h4>Authenticity</h4>
            <p>
              Every shirt in our collection is verified for authenticity, ensuring you receive genuine pieces of football history.
            </p>
          </div>
          <div className="value-item">
            <h4>Quality</h4>
            <p>
              We carefully inspect and grade each item to maintain the highest standards of quality in vintage sportswear.
            </p>
          </div>
          <div className="value-item">
            <h4>Heritage</h4>
            <p>
              Each shirt represents a unique moment in football history, preserving the legacy of the beautiful game.
            </p>
          </div>
          <div className="value-item">
            <h4>Community</h4>
            <p>
              We're building a community of passionate collectors and fans who share our love for football heritage.
            </p>
          </div>
        </div>
      </section>

      <section className="about-process">
        <h3>Our Process</h3>
        <div className="process-steps">
          <div className="step">
            <h4>1. Sourcing</h4>
            <p>
              We work with trusted networks worldwide to source authentic vintage shirts.
            </p>
          </div>
          <div className="step">
            <h4>2. Verification</h4>
            <p>
              Each shirt undergoes rigorous authentication by our expert team.
            </p>
          </div>
          <div className="step">
            <h4>3. Quality Check</h4>
            <p>
              Detailed inspection ensures items meet our quality standards.
            </p>
          </div>
          <div className="step">
            <h4>4. Delivery</h4>
            <p>
              Carefully packaged and shipped to preserve condition.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
