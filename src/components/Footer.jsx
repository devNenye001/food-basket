import React from 'react';

export default function Footer({ onNavigate }) {
  const handleScroll = (e, id) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Brand Col */}
        <div className="footer-col footer-col-brand">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')}>
            <img src="/logo1.png" alt="The Food Basket Logo" className="footer-logo" />
          </a>
        </div>

        {/* Company Col */}
        <div className="footer-col">
          <h4 className="footer-heading">COMPANY</h4>
          <ul className="footer-links">
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
            <li><a href="#menu" onClick={(e) => handleScroll(e, 'menu')}>Menu</a></li>
            <li><a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')}>Testimonials</a></li>
            <li><a href="#faqs" onClick={(e) => handleScroll(e, 'faqs')}>Faqs</a></li>
          </ul>
        </div>

        {/* Order Col */}
        <div className="footer-col">
          <h4 className="footer-heading">ORDER</h4>
          <div className="footer-text-group">
            <p className="footer-order-info">Delivery: Every location in the city of Abuja</p>
            <p className="footer-order-info">
              Call or text: <a href="tel:09120504419" className="footer-tel">09120504419</a>
            </p>
          </div>
        </div>

        {/* Follow Us Col */}
        <div className="footer-col">
          <h4 className="footer-heading">FOLLOW US</h4>
          <div className="footer-social-icons">
            {/* Instagram */}
            <a href="https://www.instagram.com/thefood_basket_/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@thefoodbasket_" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="TikTok">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.1 15.69a6.34 6.34 0 0 0 10.74 4.54 6.27 6.27 0 0 0 1.94-4.56V8.75a8.28 8.28 0 0 0 4.81 1.54v-3.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="copyright-text">
          &copy; 2026 The Food Basket. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
