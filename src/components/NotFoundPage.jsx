import React from 'react';

export default function NotFoundPage({ onGoHome, onOpenOrder }) {
  return (
    <div className="not-found-page">
      <main className="not-found-main">
        <div className="not-found-container">
          {/* 4 [Donut] 4 */}
          <div className="not-found-code-wrapper">
            <span className="not-found-digit">4</span>
            <div className="not-found-donut-wrapper">
              <img 
                src="/404-dount.png" 
                alt="Sugar Donut representing 0" 
                className="not-found-donut" 
              />
            </div>
            <span className="not-found-digit">4</span>
          </div>

          {/* Description Text */}
          <p className="not-found-desc">
            This page cant be transcribed. It looks like this page has<br />
            left the meeting - or maybe it never joined.
          </p>

          {/* Go Home CTA */}
          <div className="not-found-action">
            <button 
              type="button" 
              className="btn-order-now btn-go-home"
              onClick={onGoHome}
            >
              Go Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
