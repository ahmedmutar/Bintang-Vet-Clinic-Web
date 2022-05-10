import React from "react";
import "./index.css";
import logo from "../images/logoInvert.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top-wrapper">
          <div className="footer-left">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Our Service</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-right">
            <img src={logo} className="footer-logo" alt="Bintang Vet Clinic" />
            <p>Praktek Dokter Hewan dan Rawat Inap</p>
          </div>
        </div>
        <div className="bottom-wrapper">
          <div className="bottom-logo">
            <FaInstagram style={{ fontSize: "38px" }} />
            <FaFacebook style={{ fontSize: "38px" }} />
          </div>
          <div className="footer-copyright">
            <p>©Copyrigth. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
