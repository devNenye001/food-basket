import React from 'react';

const menuItems = [
  {
    name: 'SUNNY SLICE',
    description: 'The classic, traditional banana bread—moist, sweet, and comforting.',
    mini: '1800',
    regular: '7000',
    maxi: '15,000',
  },
  {
    name: 'COOKIE CRUMBLE',
    description: 'Baked with crushed cookie pieces for a sweet, textured crunch in every bite.',
    mini: '2000',
    regular: '8000',
    maxi: '18,000',
  },
  {
    name: 'COCONUTTY',
    description: 'Infused with tropical shredded coconut for a sweet and chewy twist.',
    mini: '2000',
    regular: '8000',
    maxi: '18,000',
  },
  {
    name: 'CASHEW CRUNCHY',
    description: 'Loaded with roasted cashew nuts, adding a rich, buttery crunch.',
    mini: '2500',
    regular: '10,000',
    maxi: '20,000',
  },
  {
    name: 'FULL COCOA',
    description: 'A decadent, chocolate-infused loaf made with rich cocoa for chocolate lovers.',
    mini: '2500',
    regular: '10,000',
    maxi: '23,000',
  },
  {
    name: 'MILK OATS',
    description: 'A wholesome, hearty variation blended with oats for a comforting texture.',
    mini: '2500',
    regular: '8000',
    maxi: '18,000',
  },
  {
    name: 'PURE ALMOND',
    description: 'A wholesome, hearty variation blended with oats for a comforting texture.',
    mini: '3000',
    regular: '12,000',
    maxi: '25,000',
  },
];

export default function MenuSection({ onOpenOrder }) {
  return (
    <section id="menu" className="menu-section">
      <div className="menu-bg-wrapper">
        <img 
          src="/menu-section-bg.jpg" 
          alt="Sliced banana loaf background" 
          className="menu-bg-img" 
        />
      </div>

      <div className="menu-container">
        {/* Taped Paper Menu Card */}
        <div className="menu-paper-card">
          <div className="tape-wrapper">
            <img src="/tape.svg" alt="Tape" className="menu-tape" />
          </div>

          <h2 className="menu-title">Menu</h2>

          <div className="menu-table">
            <div className="menu-header-row">
              <div className="menu-col-item"></div>
              <div className="menu-col-price col-header">mini</div>
              <div className="menu-col-price col-header">regular</div>
              <div className="menu-col-price col-header">maxi</div>
            </div>

            <div className="menu-items-list">
              {menuItems.map((item, index) => (
                <div key={index} className="menu-item-row">
                  <div className="menu-col-item">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <p className="menu-item-desc">{item.description}</p>
                  </div>
                  <div className="menu-col-price price-val">{item.mini}</div>
                  <div className="menu-col-price price-val">{item.regular}</div>
                  <div className="menu-col-price price-val">{item.maxi}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
