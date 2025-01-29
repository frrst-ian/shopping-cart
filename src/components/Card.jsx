import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { useCart } from "./CartContext";
import "./Card.css";

export const Card = ({ title, price, rating, image }) => {
  const [count, setCount] = useState(0);
  const { addToCart, removeFromCart } = useCart();

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      removeFromCart(); // Remove one item from the cart
    }
  };

  const increment = () => {
    setCount((prev) => prev + 1);
    addToCart(); // Add one item to the cart
  };

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setCount("");
      return;
    }
    const parsedValue = Math.max(0, parseInt(value, 10));
    if (!isNaN(parsedValue)) {
      setCount(parsedValue);
    }
  };

  return (
    <div className="cards">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>${price}</p>
      <p>
        Rating: {rating?.rate} ({rating?.count} reviews)
      </p>
      <div className="input-counter">
        <Button variant="secondary" onClick={decrement}>
          -
        </Button>
        <Input
          type="number"
          label="Number"
          value={count}
          onChange={handleChange}
        ></Input>
        <Button variant="secondary" onClick={increment}>
          +
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number,
    count: PropTypes.number,
  }),
};