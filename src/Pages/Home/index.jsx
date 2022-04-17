import React from "react";
import pict from "../../component/images/ilustrasi1.jpg";
import cust from "../../component/images/cust.jpg";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="top-homepage">
          <div className="homePict">
            <img
              src={pict}
              className="home-pict"
              alt="Vet Clinic"
              width={721}
              height={769}
            />
          </div>
          <div className="greeting">
            <h2>Hello! We are</h2>
            <h1>BINTANG VET CLINIC</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <button className="btn-greeting">About Us</button>
          </div>
        </div>
        <div className="bottom-homepage">
          <div className="review-card">
            <div className="review-card-content"></div>
            <div className="cust-pict">
              <img
                src={cust}
                className="cust-review"
                alt="Vet Clinic"
                width={119}
                height={171}
              />
            </div>
            <div className="cust-review">
              <h4>Customer Name</h4>
              <p>
                Review from customers - Review from customers - Review from
                customers - Review from customers - Review from customers -
                Review from customers - Review from customers - Review from
                customers - Review from customers - Review from customers{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
