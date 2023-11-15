import React from "react";
import logo from '../images/logo.png';
import '../styles.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Set the width and height for the logo */}
        <img src={logo} alt="Logo" style={{ width: '150px', height: '50px' }} />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
