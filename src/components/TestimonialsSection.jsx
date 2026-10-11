import React from 'react';

const testimonials = [
  {
    quote: '“This banana bread is soooo good. I need another loaf already!”',
    author: '-Chioma Joseph',
    rating: 5,
  },
  {
    quote: '“I thought I’d try one flavour. Now I want to try them all.”',
    author: '-James Ekene',
    rating: 4,
  },
  {
    quote: '“The texture, the flavour, everything. Just perfect with The Zobo drink.”',
    author: '-Rosemary Ndubuisi',
    rating: 5,
  },
  {
    quote: '“I thought I’d try one flavour. Now I want to try them all.”',
    author: '-Joshua',
    rating: 3,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-bg-wrapper">
        <img 
          src="/testimonial-section-bg.jpg" 
          alt="Warm banana bread background" 
          className="testimonials-bg-img" 
        />
      </div>

      <div className="testimonials-container">
        <h2 className="testimonials-title">
          Don't just take our word for it.
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote-wrapper">
                <p className="testimonial-quote">{item.quote}</p>
              </div>

              <div className="testimonial-footer">
                <div className="testimonial-stars" aria-label={`${item.rating} stars`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <img 
                      key={i} 
                      src="/star.png" 
                      alt="star" 
                      className="star-icon" 
                    />
                  ))}
                </div>
                <h4 className="testimonial-author">{item.author}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
