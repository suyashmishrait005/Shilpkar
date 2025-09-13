import React from 'react';
import '../styles/HeroSection.scss';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>Discover Lucknow’s Finest Craftsmen</h1>
        <button className="browse-btn">Browse Artisans</button>
      </div>
    </section>
  );
};

export default HeroSection;