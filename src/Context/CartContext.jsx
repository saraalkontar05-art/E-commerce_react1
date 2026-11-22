import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

   useEffect(() => {
    const savedCard = localStorage.getItem("cart");
    if (savedCard) {
      setCart(JSON.parse(savedCard));
    }
  }, []);

   useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((oldCart) => {
      const existingItem = oldCart.find((item) => item.id === product.id);
      if (existingItem) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...oldCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromeCart = (productId) => {
    setCart((oldCart) => oldCart.filter((item) => item.id !== productId));
  };

   const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((oldCart) =>
      oldCart.map((item) =>
        item.id === productId ? { ...item, quantity : newQuantity } : item,
      ),
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

   return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromeCart,
        updateQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );


};
