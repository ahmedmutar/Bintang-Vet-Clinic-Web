import React from "react";
import "./index.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container-nav">
        <div className="header-left">
          <Link to="/">
            <img src={logo} className="header-logo" alt="Bintang Vet Clinic" />
          </Link>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <Link className="header-right" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="header-right" to="/about-us">
                About
              </Link>
            </li>
            <li>
              <Link className="header-right" to="/our-services">
                Our Services
              </Link>
            </li>
            <li>
              <Link className="header-right" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
