import React from 'react';

export default function Hero({ onOpenOrder }) {
  const handleViewMenu = (e) => {
    e.preventDefault();
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-wrapper">
        <img 
          src="/hero-section-bg.jpg" 
          alt="Freshly baked artisan banana bread" 
          className="hero-bg-img" 
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Banana bread worth<br />
          slowing down for.
        </h1>
        <button 
          type="button" 
          className="btn-order-now btn-hero"
          onClick={handleViewMenu}
        >
          View menu
        </button>
      </div>
    </section>
  );
}
