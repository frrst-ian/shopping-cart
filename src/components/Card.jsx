import PropTypes from "prop-types";
import { useState } from "react";
import "./Card.css";
import { Button } from "./Button";
import { Input } from "./Input";

export const Card = ({ title, price, rating, image,decrement,increment }) => {

  return (
    <div className="cards">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>${price}</p>
      <p>
        Rating: {rating?.rate} ({rating?.count} reviews)
      </p>
      <div className="input-counter">
        <Button variant="secondary">-</Button>
        <Input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></Input>
        <Button variant="secondary">+</Button>
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
