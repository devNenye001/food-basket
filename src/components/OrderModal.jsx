import React, { useState } from 'react';

const flavorPricing = {
  'Classic Banana': { mini: 4000, regular: 8000, maxi: 15000 },
  'Coconut Crunch': { mini: 5000, regular: 10000, maxi: 18000 },
  'Cinnabunny': { mini: 5000, regular: 10000, maxi: 18000 },
  'Chocolate Overload': { mini: 5500, regular: 11000, maxi: 20000 },
  'Nutty Delight': { mini: 5500, regular: 11000, maxi: 20000 },
  'Mix It Up!!': { mini: 5500, regular: 11000, maxi: 20000 },
  'Fruit Medley': { mini: 5000, regular: 10000, maxi: 18000 },
};

export default function OrderModal({ isOpen, onClose, initialSize }) {
  const [flavor, setFlavor] = useState('Classic Banana');
  const [size, setSize] = useState(
    initialSize && initialSize.toLowerCase().includes('max')
      ? 'maxi'
      : initialSize && initialSize.toLowerCase().includes('reg')
      ? 'regular'
      : 'mini'
  );
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const unitPrice = flavorPricing[flavor]?.[size] || 4000;
  const totalPrice = unitPrice * quantity;

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    const message = `Hello The Food Basket! I would like to order:
🍞 Flavor: ${flavor}
📏 Size: ${size.toUpperCase()}
🔢 Quantity: ${quantity}
💰 Total: ₦${totalPrice.toLocaleString()}
📍 Delivery Location (Abuja): ${deliveryLocation || 'Every location in Abuja'}
👤 Customer Name: ${customerName || 'Customer'}
📝 Notes: ${notes || 'None'}`;

    const url = `https://wa.me/2349120504419?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Fresh Banana Bread Order</h3>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleWhatsAppOrder} className="modal-form">
          {/* Flavor Selection */}
          <div className="form-group">
            <label className="form-label">Select Flavour:</label>
            <select 
              value={flavor} 
              onChange={(e) => setFlavor(e.target.value)}
              className="form-select"
            >
              {Object.keys(flavorPricing).map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* Size Selection */}
          <div className="form-group">
            <label className="form-label">Select Loaf Size:</label>
            <div className="size-selector-pills">
              {['mini', 'regular', 'maxi'].map((s) => (
                <button
                  type="button"
                  key={s}
                  className={`size-pill ${size === s ? 'active' : ''}`}
                  onClick={() => setSize(s)}
                >
                  <span className="size-name">{s.charAt(0).toUpperCase() + s.slice(1)}</span>
                  <span className="size-price">₦{flavorPricing[flavor][s].toLocaleString()}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="form-group quantity-row">
            <label className="form-label">Quantity:</label>
            <div className="qty-controls">
              <button 
                type="button" 
                className="qty-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="qty-value">{quantity}</span>
              <button 
                type="button" 
                className="qty-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Delivery Location in Abuja */}
          <div className="form-group">
            <label className="form-label">Delivery Address in Abuja:</label>
            <input 
              type="text" 
              placeholder="e.g. Wuse 2, Garki, Maitama, Jabi..." 
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {/* Customer Name */}
          <div className="form-group">
            <label className="form-label">Your Name & Phone:</label>
            <input 
              type="text" 
              placeholder="Your Name / Phone number" 
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {/* Total & Action */}
          <div className="modal-total-box">
            <span className="total-label">Total Estimated:</span>
            <span className="total-amount">₦{totalPrice.toLocaleString()}</span>
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn-order-now btn-modal-submit">
              Order via WhatsApp (09120504419)
            </button>
            <a href="tel:09120504419" className="btn-modal-call">
              Or Call 09120504419
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
