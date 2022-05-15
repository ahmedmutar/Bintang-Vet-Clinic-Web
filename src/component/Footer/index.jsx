import React from "react";
import "./index.css";
import logo from "../images/logoInvert.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top-wrapper">
          <div className="footer-left">
            <ul>
              <li>
                <Link className="footer-left" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="footer-left" to="/about-us">
                  About
                </Link>
              </li>
              <li>
                <Link className="footer-left" to="/our-services">
                  Our Services
                </Link>
              </li>
              <li>
                <Link className="footer-left" to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <Link to="/">
              <img
                src={logo}
                className="footer-logo"
                alt="Bintang Vet Clinic"
              />
            </Link>
            <p>Praktek Dokter Hewan dan Rawat Inap</p>
          </div>
        </div>
        <div className="bottom-wrapper">
          <div className="bottom-logo">
            <a href="https://www.instagram.com/bintang_vet/">
              <FaInstagram style={{ fontSize: "38px" }} />
            </a>
            <a href="https://wa.me/085779867017">
              <FaWhatsapp style={{ fontSize: "38px" }} />
            </a>
          </div>
          <div className="footer-copyright">
            <p>©Copyrigth. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
