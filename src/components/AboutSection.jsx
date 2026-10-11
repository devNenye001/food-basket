import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-bg-wrapper">
        <picture>
          <source media="(max-width: 768px)" srcSet="/correct.png" />
          <img 
            src="/section2-bg.jpg" 
            alt="Artisanal banana bread on parchment" 
            className="about-bg-img" 
          />
        </picture>
        <div className="about-overlay"></div>
      </div>

      {/* Hand-drawn Doodles */}
      <div className="about-doodles">
        <img 
          src="/doddle1.svg" 
          alt="Baking bowl doodle" 
          className="doodle doodle-left" 
        />
        <img 
          src="/doddle2.svg" 
          alt="Banana bread slice doodle" 
          className="doodle doodle-top-right" 
        />
        <img 
          src="/doddle3.svg" 
          alt="Bread loaf doodle" 
          className="doodle doodle-bottom-right" 
        />
      </div>

      <div className="about-container">
        <div className="about-card">
          <h2 className="about-title">
            We put a lot of love<br />
            into a very good loaf.
          </h2>
          <p className="about-description">
            At The Food Basket, we believe banana bread deserves more than just one flavour. That's why we make it the star of the show, with delicious twists for every kind of craving. From the familiar comfort of Classic to the indulgence of Nutella and White Chocolate, there's always another loaf to fall in love with.
          </p>
        </div>
      </div>
    </section>
  );
}
