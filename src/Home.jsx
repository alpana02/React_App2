import React from "react";
import "./index.css";
import web from "./images/wfh_1.svg";
import img1 from "./clients/client-1.png";
import img2 from "./clients/client-2.png";
import img3 from "./clients/client-3.png";
import img4 from "./clients/client-4.png";
import img5 from "./clients/client-5.png";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Don't worry.
                    <br />
                    We are here for
                    <br />
                    <strong className="brand-name"> every solution.</strong>
                  </h1>
                  <h6 className="my-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </h6>
                  <div className="mt-3">
                    <NavLink to="/" className="btn-get-started">
                      Get Started
                    </NavLink>
                    <NavLink to="/" className="btn btn-link">
                      <PlayCircleFilledIcon /> Watch Video
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cliens" class="cliens section-bg">
        <div class="container">
          <div class="row" data-aos="zoom-in">
            <div class="col-lg-2 col-md-4 col-8 d-flex align-items-center justify-content-center">
              <img src={img1} class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-8 d-flex align-items-center justify-content-center">
              <img src={img2} class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-8 d-flex align-items-center justify-content-center">
              <img src={img3} class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-8 d-flex align-items-center justify-content-center">
              <img src={img4} class="img-fluid" alt="" />
            </div>

            <div class="col-lg-2 col-md-4 col-8 d-flex align-items-center justify-content-center">
              <img src={img5} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
