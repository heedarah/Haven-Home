import react, { createContext, useState } from "react";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};
export { CartContext, CartProvider };
