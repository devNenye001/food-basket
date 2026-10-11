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
        <button 
          type="button" 
          className="btn-order-now btn-cta"
          onClick={onOpenOrder}
        >
          Order Now
        </button>
      </div>
    </section>
  );
}
