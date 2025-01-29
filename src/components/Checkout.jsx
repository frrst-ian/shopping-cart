import PropTypes from "prop-types";
import './Checkout.css'

export const Checkout = ({ cartItems, onClose }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="checkout-overlay">
      <div className="checkout-sidebar">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Checkout</h2>
        <div className="checkout-items">
          {cartItems.map((item) => (
            <div key={item.title} className="checkout-item">
              <p>{item.title}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="checkout-total">
          <h3>Total: ${calculateTotal()}</h3>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};