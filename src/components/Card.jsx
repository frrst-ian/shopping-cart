import PropTypes from "prop-types";
import './Card.css'
export const Card = ({ title, price, rating, image }) => {
  return (
    <div className="cards">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>${price}</p>
      <p>
        Rating: {rating?.rate} ({rating?.count} reviews)
      </p>
      <div className="input-counter">
                <span className="minus">-</span>
                <input type="number" className="number" />
                <span className="plus">+</span>
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
