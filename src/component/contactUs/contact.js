import React from "react";
import "./contact.css";
import Line from "../../assets/Image/UnderLine-01.svg";

function Contact() {
  return (
    <div className="contact-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 mt-5 mb-5">
            <h1 className="text-center Text-heading mt-5">Contact Us</h1>
            <div className="text-center mb-5">
              <img src={Line} className="img-fluid" width={"30%"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
