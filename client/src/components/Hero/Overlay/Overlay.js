import React from 'react';
import './Overlay.css'; // Import CSS for styles

const Overlay = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Your Catchy Headline</h1>
        <p className="hero__subtitle">Engaging subheading goes here</p>
        <button className="hero__cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Overlay;
