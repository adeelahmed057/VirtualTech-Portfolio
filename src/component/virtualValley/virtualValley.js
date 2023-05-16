import React from "react";
import "./virtualValley.css";
import UAE from "../../assets/Image/uae.png";

function VirtualValley() {
  return (
    <div className="container">
      <div className="row jusitfy-content-center align-items-center mt-5 mb-5 valley-bg">
        <div className="col-lg-8 col-md-12 mt-5 mb-5">
          <h2 className="text-Join">
            Join the <span className="">virtual tech </span>
             Dubai team in transforming the UAE into the future Silicon Valley.
          </h2>
          <div className="ms-4">
            <button className="btn btn-join">
                Join us Now
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mt-5 mb-5">
          <div>
            <img src={UAE} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualValley;
