import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import cartclasses from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartctx = useContext(CartContext);

  const numberOfCartItems = cartctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={cartclasses.button} onClick={props.onClick}>
      <span className={cartclasses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cartclasses.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
