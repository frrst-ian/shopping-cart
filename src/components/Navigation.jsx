import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";
import "./Navigation.css";

export const Navigation = () => {
  const { cartCount } = useCart();

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
            <div className="cart-icon">
              <ShoppingCart /> &nbsp; ({cartCount})
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
