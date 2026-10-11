import React, { useState, useEffect } from 'react';

export default function Navbar({ onNavigate, onOpenOrder, currentView }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="navbar-brand"
          onClick={(e) => handleLinkClick(e, 'home')}
        >
          <img 
            src={currentView === 'home' ? "/logo-white.png" : "/logo1.png"} 
            alt="The Food Basket" 
            className="navbar-logo" 
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar-links">
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
          <a href="#menu" onClick={(e) => handleLinkClick(e, 'menu')}>Menu</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
          <a href="#testimonials" onClick={(e) => handleLinkClick(e, 'testimonials')}>Testimonials</a>
          <a href="#faqs" onClick={(e) => handleLinkClick(e, 'faqs')}>Faqs</a>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-cta-desktop">
          <button 
            type="button" 
            className="btn-order-now"
            onClick={onOpenOrder}
          >
            Order Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          type="button" 
          className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-backdrop" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <img src="/logo1.png" alt="The Food Basket" className="mobile-menu-logo" />
            <button 
              type="button" 
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          <nav className="mobile-nav-links">
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
            <a href="#menu" onClick={(e) => handleLinkClick(e, 'menu')}>Menu</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
            <a href="#testimonials" onClick={(e) => handleLinkClick(e, 'testimonials')}>Testimonials</a>
            <a href="#faqs" onClick={(e) => handleLinkClick(e, 'faqs')}>Faqs</a>
          </nav>

          <div className="mobile-menu-footer">
            <button 
              type="button" 
              className="btn-order-now mobile-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenOrder();
              }}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
