import React from "react";
import { Button } from "react-bootstrap";
import Background from "../../assests/Background.jpg";
import Headerclass from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={Headerclass.header}>
        <h1>OrderIT</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={Headerclass['main-image']}>
        <img src={Background} alt="Background" />
      </div>
    </>
  );
}

export default Header;
