import React from "react";
import pict from "../../component/images/homePic.png";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="top-homepage">
          <div className="homePict">
            <img src={pict} className="home-pict" alt="Vet Clinic" />
          </div>
          <div className="greeting">
            <div className="greeting-title">
              <h2>Hello! We are</h2>
              <h1>BINTANG VET.</h1>
              <p>
                Dokter Hewan yang siap menjadi partner terbaik bagi Anda dan
                "anak bulu" Anda tercinta.
              </p>
              <p>
                Kami melayani Pemeriksaan dan Pengobatan Rutin, Operasi Mayor
                dan Minor, Vaksinasi, Laboatorium, Rawat Inap, Pet Hotel,
                Pethotel, Grooming dan Styling.
              </p>
            </div>
            <button className="btn-greeting">
              <Link className="btn-greeting-link" to="about-us">
                About Us
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
