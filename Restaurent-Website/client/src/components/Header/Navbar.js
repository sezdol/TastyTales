import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <IoClose size={35} color="white" /> : <IoMenu size={35} color="white" /> }
        </div>
        <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink className="navbar-link" to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/menu" onClick={() => setMenuOpen(false)}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/account" onClick={() => setMenuOpen(false)}>
              Account
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
