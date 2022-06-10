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
            <h1>Bintang Vet Clinic Tj. Duren</h1>
            <p>
              <a href="https://wa.me/0811188020">
                <FaWhatsapp style={{ fontSize: "16px" }} />
                <span> </span>0811 188 020
              </a>
            </p>
            <a href="https://goo.gl/maps/YnAwAdr3nSFb4G5w8">
              <button type="submit">Get Direction</button>
            </a>
          </div>

          <div className="address-card">
            <h1>Bintang Vet Clinic Alam Sutera</h1>
            <p>
              <a href="https://wa.me/0811177752">
                <FaWhatsapp style={{ fontSize: "16px" }} />
                <span> </span>0811 177 752
              </a>
            </p>
            <a href="https://goo.gl/maps/BJt1L8s9wjYPyVMb6">
              <button type="submit">Get Direction</button>
            </a>
          </div>

          <div className="address-card">
            <h1>Bintang Vet Bintaro</h1>
            <p>
              <a href="https://wa.me/085779867017">
                <FaWhatsapp style={{ fontSize: "16px" }} />
                <span> </span>0857 7986 7017
              </a>
            </p>
            <a href="https://goo.gl/maps/4np5DPawPTLxomit5">
              <button type="submit">Get Direction</button>
            </a>
          </div>

          <div className="address-card">
            <h1>Bintang Vet Clinic Kebagusan</h1>
            <p>
              <a href="https://wa.me/081511130293">
                <FaWhatsapp style={{ fontSize: "16px" }} />
                <span> </span>0815 1113 0293
              </a>
            </p>
            <a href="https://goo.gl/maps/e6oW7Fz9P57d6CHM6">
              <button type="submit">Get Direction</button>
            </a>
          </div>

          <div className="address-card">
            <h1>Bintang Vet Clinic Khafi</h1>
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
