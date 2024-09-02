/* eslint-disable no-unused-vars */
import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  addMeal: (meal) => {}, // Add this function for adding meals
});

export default CartContext;
