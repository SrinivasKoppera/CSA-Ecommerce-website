import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevState) => [...prevState, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevState) => prevState.filter((item) => item.id !== id));
  };

  const getTotalItems = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
