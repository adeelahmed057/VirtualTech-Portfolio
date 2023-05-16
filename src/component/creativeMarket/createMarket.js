import React from "react";
import "./createMarket.css";
import Underline from "../../assets/Image/UnderLine-01.svg";

function CreateMarket() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h2 className="Text-heading text-center text-white">
            Create Market Leading Products With &nbsp;
            <br />
            <span style={{ color: "#5cfff3" }}>
              <b>Blockchain </b>
            </span>
            Software Development Services
          </h2>
          <div className="text-center">
            <img src={Underline} className="img-fluid" width={"50%"} />
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
          <p className="text-detail text-center">
            We are a world-renowned Blockchain development company and have a
            stronghold in developing Blockchain Software Solution in Dubai. Our
            team has worked on 50+ blockchain products and delivered them
            successfully.
          </p>
        </div>
        <div className="col-lg-5 col-md-4 col-sm-10"></div>
      </div>
    </div>
  );
}

export default CreateMarket;
