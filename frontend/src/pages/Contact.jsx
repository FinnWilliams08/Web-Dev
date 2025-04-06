import React, { useState } from "react";
import './Contact.css'; // Import the CSS file

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    // Add logic to send form data to server or API
    setFormData({ name: "", email: "", message: "" }); // Reset the form
    setIsSubmitted(true); // Show acknowledgment message
    setTimeout(() => setIsSubmitted(false), 5000); // Hide the message after 5 seconds
  };

  return (
    <main className="contact-container">
      <h2>Contact Us</h2>
      <p>Reach out to us with any questions or inquiries about our products.</p>
      {/* Acknowledgment Message */}
      {isSubmitted && (
        <div className="acknowledgment-message">
          Thank you! Your message has been sent.
        </div>
      )}
      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </main>
  );
}
