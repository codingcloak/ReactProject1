import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (items) => {},
  removeItems: (id) => {},
});

// we assigned dummy key value pairs to the object so that IDE provides suggestions while Coding

export default CartContext;
