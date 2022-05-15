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
            <div className="socmed-card-cu">
              <a href="https://www.instagram.com/bintang_vet/">
                <FaInstagram style={{ fontSize: "28px" }} />
              </a>
              <a href="https://www.instagram.com/bintang_vet/">@bintang_vet</a>
            </div>

            <div className="socmed-card-cu">
              <a href="https://wa.me/085779867017">
                <FaWhatsapp style={{ fontSize: "28px" }} />
              </a>
              <a href="https://wa.me/085779867017">Bintang Vet Bintaro</a>
            </div>
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
            <a href="https://goo.gl/maps/YnAwAdr3nSFb4G5w8">
              <button type="submit">Get Direction</button>
            </a>
          </div>

          <div className="address-card">
            <h1>GLORY PETSHOP ALAM SUTERA</h1>
            <p>0811 177 752</p>
            <a href="https://goo.gl/maps/BJt1L8s9wjYPyVMb6">
              <button type="submit">Get Direction</button>
            </a>
          </div>

          <div className="address-card">
            <h1>Bintang Vet Bintaro (Petshop & Dokter Hewan)</h1>
            <p>0857 7986 7017</p>
            <a href="https://goo.gl/maps/4np5DPawPTLxomit5">
              <button type="submit">Get Direction</button>
            </a>
          </div>

          <div className="address-card">
            <h1>Bintang Vet Clinic ( Deku Kebagusan )</h1>
            <p>0815 1113 0293</p>
            <a href="https://goo.gl/maps/e6oW7Fz9P57d6CHM6">
              <button type="submit">Get Direction</button>
            </a>
          </div>

          <div className="address-card">
            <h1>Deku Petshop & Pet Care Khafi</h1>
            <p>-</p>
            <a href="https://goo.gl/maps/SfiXJNJgavujY4vf7">
              <button type="submit">Get Direction</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
