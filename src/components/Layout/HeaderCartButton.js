import React from 'react'
import { Button } from 'react-bootstrap'
import CartIcon from '../Cart/CartIcon'
import cartclasses from './HeaderCartButton.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderCartButton() {
  return (
    <button className={cartclasses.button}>
      <span className={cartclasses.icon}><CartIcon/></span>
      <span>Your Cart</span>
      <span className={cartclasses.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton
