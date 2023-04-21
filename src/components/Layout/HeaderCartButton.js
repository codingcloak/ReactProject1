import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import cartclasses from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartctx = useContext(CartContext);

  const { items } = cartctx; //Object De-structuring

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${cartclasses.button} ${
    btnIsHighlighted ? cartclasses.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return ()=>{
      clearTimeout(timer);
    }
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={cartclasses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cartclasses.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
