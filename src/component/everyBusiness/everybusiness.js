import React from "react";
// import Card from "react-bootstrap/Card";
import Line from "../../assets/Image/UnderLine-01.svg";
const data = [
  {
    title: "Enterprise Blockchain Development",
    description:
      "Unlock Tailor-Made Blockchain Software Solutions Crafted by Our Expert Team to Address the Unique Needs of Your Business. From Enhanced Security Measures to Streamlined Data Management, Our Solutions are designed to Empower Your Success.",
  },
  {
    title: "Startups",
    description:
      "Embrace the Technological Revolution with Our Cutting-Edge Digital Solutions, as We Empower Startups to Thrive and Scale Their Business. As a Premier Blockchain Software Development Company in Dubai, We Enable Startups to Join the Vanguard of Innovation.",
  },
  {
    title: "SMEs",
    description:
      "Unlock the Power of Blockchain Software Solutions in Dubai, Empowering SMEs to Seize Competitive Advantages. Experience Enhanced Customer Reach, Streamlined Revenue Generation, and Accelerated Growth with Our Tailor-Made Solutions.",
  },
  {
    title: "NGO & Govt. Bodies",
    description:
      "Empowering Government Bodies and NGOs with Custom Blockchain Solutions, Our Team Drives Transparency, Trust, and Enhanced Functionality. Elevate Platform Security and Performance with our Innovative Solutions",
  },
];
function EveryBusiness() {
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center mt-5 mb-5">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div>
            <h1 className="Text-heading">
              Blockchain Software Development Services Accustomed to Every
              Business
            </h1>

            <div className="">
              <img src={Line} className="img-fluid" alt="" width={"300px"} />
              <p className="text-detail text-left mt-3">
                The potential of virtual tech to give lucrative output to
                organisations of all sizes is what distinguishes it as the top
                blockchain software development company in Dubai. We have
                developed the ability to shape technologies into solutions that
                can operate efficiently for any organisation throughout our 3
                years of operations in blockchain technology.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="row justify-content-between ">
            {data.map((data) => {
              return (
                <>
                  <div className="col-lg-5 col-md-12 mt-3 border border-white">
                    <div className="text-title text-center text-capitalize">
                      <strong>{data.title}</strong>
                    </div>
                    <p className="text-detail text-center">
                      {data.description}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EveryBusiness;
