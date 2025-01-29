import PropTypes from "prop-types";
import { useState } from "react";
import "./Card.css";
import { Button } from "./Button";
import { Input } from "./Input";

export const Card = ({ title, price, rating, image }) => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    return setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const increment = () => {
    setCount((prev) => prev + 1);
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
