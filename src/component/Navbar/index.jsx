import React from "react";
import "./index.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="header-left">
          <img src={logo} className="header-logo" alt="Bintang Vet Clinic" />
        </div>
        <div className="header-right">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
