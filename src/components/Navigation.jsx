import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";
import { Checkout } from "./Checkout";
import "./Navigation.css";

export const Navigation = () => {
  const { cartItems } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const toggleCheckout = () => {
    setShowCheckout((prev) => !prev);
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div className="nav-right">
            <div>
              <Link to="/shop">Shop</Link>
            </div>
            <div className="cart-icon" onClick={toggleCheckout}>
              <ShoppingCart /> &nbsp; ({cartItems.length})
            </div>
          </div>
        </div>
      </nav>
      {showCheckout && (
        <Checkout cartItems={cartItems} onClose={toggleCheckout} />
      )}
    </div>
  );
};