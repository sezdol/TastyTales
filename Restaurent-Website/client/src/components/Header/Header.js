import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { MdOutlineRestaurant } from "react-icons/md";
import { BsHandbagFill } from "react-icons/bs";
import { useState } from "react";
import Cart from "../Cart/Cart";
import './Header.css'
import Cdata from "../Cart/Cdata";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="main-header">
      <div className="header-content">
        <NavLink to="/">
          <div className="logo">
            <MdOutlineRestaurant size={30} className="logo-icon" /> TastyTales
          </div>
        </NavLink>
        <div className="header-links">
          <Navbar />
          <span className="cart-icon" onClick={() => setShowCart(true)}>
            <BsHandbagFill className="bag" />
            {Cdata.length > 0 && <span>{Cdata.length}</span>}
          </span>
          {showCart && <Cart setShowCart={setShowCart} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
