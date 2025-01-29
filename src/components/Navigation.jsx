import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
