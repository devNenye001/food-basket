import React, { useState } from 'react';

const faqs = [
  {
    question: 'Can I order for same-day delivery?',
    answer:
      'We operate on a preorder basis, so we recommend placing your order ahead of time. Contact us to check availability and the earliest possible delivery or collection time.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'You can easily place an order right here by clicking any "Order Now" button, or by calling or texting our hotline at 09120504419. We accept orders daily.',
  },
  {
    question: 'What flavours do you have?',
    answer:
      'We bake Sunny Slice, Cookie Crumble, Coconutty, Cashew Crunchy, Full Cocoa, Milk Oats, and Pure Almond!',
  },
  {
    question: 'What sizes can I order?',
    answer:
      'We offer Mini, Regular, and Maxi sizes for all our freshly baked loaves.',
  },
  {
    question: 'How should I store my banana bread?',
    answer:
      'Keep it at room temperature for up to 4 days, refrigerated for up to 7 days, or freeze for up to 2 months. Warm a slice for 10-15 seconds for that fresh-out-of-the-oven aroma!',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-wrapper">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
