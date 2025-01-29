/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const removeFromCart = () => {
    setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);