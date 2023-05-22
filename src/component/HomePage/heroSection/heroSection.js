import React from "react";
import { useState } from "react";
import Picture from "../../../assets/Image/PictureOne-01.svg";
import Models from "../../models/model";
// import "./App.css"

function HeroSection() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="Header-bg">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
            <div className="Text-heading mb-3 me-3">
              Blockchain Development Company
            </div>
            <div className="text-detail mt-3 mb-3 me-3">
              We are in the business of developing world quality
              blockchain-based development services that are readily accessible
              and highly affordable. Get in touch with us and enrich your
              business with expertise.
            </div>
            <div className="d-flex justify-content-md-start">
              <button
                className="btn btn-experts p-3"
                onClick={() => setModalShow(true)}
              >
                Talk To Our Experts
              </button>
              <Models
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
            <div>
              <img src={Picture} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
