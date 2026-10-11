import React from 'react';

export default function CtaBanner({ onOpenOrder }) {
  return (
    <section className="cta-banner-section">
      <div className="cta-bg-wrapper">
        <img 
          src="/final-cta-section.jpg" 
          alt="Assorted banana bread loaves ready to order" 
          className="cta-bg-img" 
        />
        <div className="cta-overlay"></div>
      </div>

      <div className="cta-content">
        <h2 className="cta-title">
          Sooo... which loaf are we getting you?
        </h2>
        <a 
          href="https://wa.me/234912004419?text=Hello%20The%20Food%20Basket!%20I%20would%20like%20to%20place%20an%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-order-now btn-cta"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
