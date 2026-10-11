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
              Call or text: <a href="tel:0912004419" className="footer-tel">0912004419</a>
            </p>
          </div>
        </div>

        {/* Follow Us Col */}
        <div className="footer-col">
          <h4 className="footer-heading">FOLLOW US</h4>
          <div className="footer-social-icons">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.597 1.325-1.326V1.326C24 .597 23.405 0 22.675 0z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Twitter">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="copyright-text">
          &copy; 2026 The Food Bakery. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
