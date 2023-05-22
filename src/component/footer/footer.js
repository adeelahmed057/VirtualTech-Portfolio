import React from "react";
import "./footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center m-auto  mt-5">
        <div className="col-lg-4 col-md-12 col-sm-12 border border-priamry">
          <div className="">
            <h1 className="footer-title">Contact</h1>
          </div>
          <div>
            <h2 className="footer-heading">
              <span className="" style={{ fontSize: "18px" }}>
                <BsFillTelephoneFill /> &nbsp;
              </span>
              Phone:
            </h2>
            <p className="footer-detail">+92 316 409 9042</p>
            <h2 className="footer-heading">
              <span className="" style={{ fontSize: "18px" }}>
                <MdEmail /> &nbsp;
              </span>
              Email:
            </h2>
            <p className="footer-detail">+92 316 409 9042</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 border border-priamry">
          <div className="">
            <h1 className="footer-title">Other Links:</h1>
          </div>
          <div>
            <ul className="footer-list">
              <li>Web3</li>
              <li>Metaverse</li>
              <li>App</li>
              <li>Software</li>
              <li>AI</li>
              <li>IoT</li>
              <li>Chatbot</li>
              <li>Portfolio</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 border border-priamry">
          <div className="">
            <h1 className="footer-title">Address</h1>
          </div>
          <div>
            <h2 className="footer-heading">
              <span className="" style={{ fontSize: "18px" }}>
                <BsFillTelephoneFill /> &nbsp;
              </span>
              Phone:
            </h2>
            <p className="footer-detail">+97-150-994-9375</p>
            <h2 className="footer-heading">
              <span className="" style={{ fontSize: "18px" }}>
                <MdEmail /> &nbsp;
              </span>
              Email:
            </h2>
            <p className="footer-detail">+92 316 409 9042</p>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <hr style={{ color: "#fff" }} />
        </div>
        <div className="col-lg-6 col-md-8 col-sm-12 mt-3">
          <p className="text-center text-copyRight">
            Copyright 2022-2023 by VirtualTech. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
