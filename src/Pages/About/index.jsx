import React from "react";
import logo from "../../component/images/logo_cropped.png";
import "./index.css";
import background from "../../component/images/illustration4.jpg";

export const About = () => {
  return (
    <>
      <div className="about">
        <div className="top-about">
          <div className="top-about-title">
            <img src={background} alt="vet clinic" class="bg-image" />
            <div className="bg-img-title">
              <img src={logo} alt="vet clinic" width={400} height={214} />
              <h1> OUR VISION AND MISSION</h1>
            </div>
          </div>
        </div>
        <div className="bottom-about">
          <div className="vision-wrap">
            <h1>VISION</h1>
            <div className="visionTitle">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          <div className="mission-wrap">
            <h1>MISSION</h1>
            <div className="missionTitle">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
