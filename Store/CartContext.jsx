"use client";
import React, { createContext, useEffect, useState } from "react";
import { loadCart, saveCart } from "@/Store/localstorge";

export const cartContext = createContext();
export default function CartContext({ childern }) {
  const [cart, setCart] = useState(() => loadCart() || []);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addcart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id === id));
  };

  const clearCart = () => setCart([]);

  
  return (
    <CartContext.Provider
      value={{ cart, addcart, removeItem, clearCart }}
    ></CartContext.Provider>
  );
}
