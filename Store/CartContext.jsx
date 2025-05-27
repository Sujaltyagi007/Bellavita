"use client";
import React, { createContext, useEffect, useState } from "react";
import { loadCart, saveCart } from "@/Store/localstorge.js";

export const CartContext = createContext(loadCart|| []);
export default function CartProvider(prop) {
  const [cart, setCart] = useState(() => loadCart() || []);
  useEffect(() => {
    saveCart(cart);
  }, [cart]);
  const addcart = (item) => {
    setCart((prev) => [...prev, item]);
    console.log("data", item);
  };
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id === id));
  };
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addcart, removeItem, clearCart }}>
      {prop.children}
    </CartContext.Provider>
  );
}
