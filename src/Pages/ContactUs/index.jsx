import React from "react";
import "./index.css";
import header from "../../component/images/header-contactUs.jpg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="top-cu">
        <div className="top-left-cu">
          <h1>CONTACT US</h1>
          <h2></h2>
          <div className="socmed-cu">
            <FaInstagram style={{ fontSize: "28px" }} />
            <p>@bintang_vet</p>
            <FaWhatsapp style={{ fontSize: "28px" }} />
            <p>Bintang Vet Bintaro (Petshop & Dokter Hewan)</p>
          </div>
        </div>
        <div className="top-right-cu">
          <img src={header} alt="Vet Clinic" />
        </div>
      </div>

      <div className="bottom-cu">
        <div className="address-contents">
          <div className="address-card">
            <h1>BINTANG VET CLINIC (GLORY PETSHOP)</h1>
            <p>0811 188 020</p>
            <button type="submit">Get Direction</button>
          </div>

          <div className="address-card">
            <h1>GLORY PETSHOP ALAM SUTERA</h1>
            <p>0811 177 752</p>
            <button type="submit">Get Direction</button>
          </div>

          <div className="address-card">
            <h1>Bintang Vet Bintaro (Petshop & Dokter Hewan)</h1>
            <p>0857 7986 7017</p>
            <button type="submit">Get Direction</button>
          </div>

          <div className="address-card">
            <h1>Bintang Vet Clinic ( Deku Kebagusan )</h1>
            <p>0815 1113 0293</p>
            <button type="submit">Get Direction</button>
          </div>

          <div className="address-card">
            <h1>Deku Petshop & Pet Care Khafi</h1>
            <button type="submit">Get Direction</button>
          </div>
        </div>
      </div>
    </div>
  );
};
