import React from "react";
import ComingSoon from "../../assets/Coming Soon/comingsoon.png";

function Software() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-sm-12 text-center mt-5 mb-5">
          <img src={ComingSoon} className="img-fluid" alt="" width={"60%"} />
        </div>
      </div>
    </div>
  );
}

export default Software;
