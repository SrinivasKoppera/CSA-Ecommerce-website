import React, { createContext, useState, useContext } from "react";

// 1. Create the Cart Context
const CartContext = createContext();

// 2. Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Get total number of items
  const getTotalItems = () => {
    return cart.length;
  };

  // Provide cart data and actions to children
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};
