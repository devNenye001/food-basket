import React from 'react';

const showcaseItems = [
  {
    image: '/mini.jpg',
    label: 'Mini size',
    alt: 'Mini size banana bread loaves',
  },
  {
    image: '/medium.jpg',
    label: 'Medium size',
    alt: 'Medium size banana bread loaves in foil tins',
  },
  {
    image: '/regular.jpg',
    label: 'Regular size',
    alt: 'Regular size banana bread loaf with fruit toppings',
  },
  {
    image: '/maxi.jpg',
    label: 'Maximum size',
    alt: 'Maximum size banana bread loaf with rich nut toppings',
  },
];

export default function ShowcaseSection({ onSelectSize }) {
  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <h2 className="showcase-title">
          How much happiness can you handle?
        </h2>

        <div className="showcase-grid">
          {showcaseItems.map((item, index) => (
            <div 
              key={index} 
              className="showcase-card"
              onClick={() => onSelectSize && onSelectSize(item.label)}
            >
              <div className="showcase-img-wrapper">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="showcase-img" 
                  loading="lazy"
                />
                <div className="showcase-overlay">
                  <span className="showcase-label">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
