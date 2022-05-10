import "./index.css";
import React from "react";
import headerPic from "../../component/images/headerPic.png";
import srv1 from "../../component/images/1-srv.jpg";
import srv2 from "../../component/images/2-srv.jpg";
import srv3 from "../../component/images/3-srv.jpg";
import srv4 from "../../component/images/4-srv.jpg";
import srv5 from "../../component/images/5-srv.jpg";
import srv6 from "../../component/images/6-srv.jpg";
import srv7 from "../../component/images/7-srv.jpg";
import srv8 from "../../component/images/8-srv.jpg";
import srv9 from "../../component/images/9-srv.jpg";

const Services = () => {
  return (
    <div className="services">
      <div className="containerSrv">
        <div className="header-srv">
          <img src={headerPic} className="bg-header" alt="Vet Clinic" />
          <div className="header-title-srv">
            <h1>OUR SERVICES</h1>
          </div>
        </div>
        <div className="contents-srv">
          <div className="content-srv">
            <div className="content-pic-srv">
              <img src={srv1} alt="Vet Clinic" />
            </div>
            <p className="txt-content-srv">Pemeriksaan Rutin</p>
          </div>

          <div className="content-srv">
            <div className="content-pic-srv">
              <img src={srv2} alt="Vet Clinic" />
            </div>
            <p className="txt-content-srv">Pengobatan Rutin</p>
          </div>

          <div className="content-srv">
            <div className="content-pic-srv">
              <img src={srv3} alt="Vet Clinic" />
            </div>
            <p className="txt-content-srv">Operasi Mayor dan Minor</p>
          </div>

          <div className="content-srv">
            <div className="content-pic-srv">
              <img src={srv4} alt="Vet Clinic" />
            </div>
            <p className="txt-content-srv">Laboratorium</p>
          </div>

          <div className="content-srv">
            <div className="content-pic-srv">
              <img src={srv5} alt="Vet Clinic" />
            </div>
            <p className="txt-content-srv">Rawat Inap</p>
          </div>

          <div className="content-srv">
            <div className="content-pic-srv">
              <img src={srv6} alt="Vet Clinic" />
            </div>
            <p className="txt-content-srv">Pet Hotel</p>
          </div>

          <div className="content-srv">
            <div className="content-pic-srv">
              <img src={srv7} alt="Vet Clinic" />
            </div>
            <p className="txt-content-srv">Vaksinisasi</p>
          </div>

          <div className="content-srv">
            <div className="content-pic-srv">
              <img src={srv8} alt="Vet Clinic" />
            </div>
            <p className="txt-content-srv">Grooming dan Styling</p>
          </div>

          <div className="content-srv">
            <div className="content-pic-srv">
              <img src={srv9} alt="Vet Clinic" />
            </div>
            <p className="txt-content-srv">Antar Jemput</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
