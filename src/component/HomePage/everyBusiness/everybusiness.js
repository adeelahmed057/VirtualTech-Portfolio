import React from "react";
import "./everybusiness.css"
// import Card from "react-bootstrap/Card";
import Line from "../../../assets/Image/UnderLine-01.svg";
import PictureOne from "../../../assets/EveryBusiness/Picture1.png";
import PictureTwo from "../../../assets/EveryBusiness/Picture2.png";
import PictureThree from "../../../assets/EveryBusiness/Picture3.png";
import PictureFour from "../../../assets/EveryBusiness/Picture4.png";

const data = [
  {
    image: PictureFour,
    title: "Enterprise Blockchain Development",
    description:
      "Unlock Tailor-Made Blockchain Software Solutions Crafted by Our Expert Team to Address the Unique Needs of Your Business. From Enhanced Security Measures to Streamlined Data Management, Our Solutions are designed to Empower Your Success.",
  },
  {
    image: PictureThree,
    title: "Startups",
    description:
      "Embrace the Technological Revolution with Our Cutting-Edge Digital Solutions, as We Empower Startups to Thrive and Scale Their Business. As a Premier Blockchain Software Development Company in Dubai, We Enable Startups to Join the Vanguard of Innovation.",
  },
  {
    image: PictureTwo,
    title: "SMEs",
    description:
      "Unlock the Power of Blockchain Software Solutions in Dubai, Empowering SMEs to Seize Competitive Advantages. Experience Enhanced Customer Reach, Streamlined Revenue Generation, and Accelerated Growth with Our Tailor-Made Solutions.",
  },
  {
    image: PictureOne,
    title: "NGO & Govt. Bodies",
    description:
      "Empowering Government Bodies and NGOs with Custom Blockchain Solutions, Our Team Drives Transparency, Trust, and Enhanced Functionality. Elevate Platform Security and Performance with our Innovative Solutions",
  },
];
function EveryBusiness() {
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center mt-5 mb-5">
        <div className="col-lg-4 col-md-12 col-sm-12">
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
        <div className="col-lg-7 col-md-12 col-sm-12">
          <div className="row  justify-content-evenly ">
            {data.map((data) => {
              return (
                <>
                  <div className="col-lg-5 col-md-12 border-card mt-4">
                      <div className="text-center mt-3">
                        <img
                          src={data.image}
                          className="img-fluid"
                          // width={"300px"}
                          alt=""
                        />
                      </div>
                  

                    <div className="text-title text-center text-capitalize mt-3">
                      <strong>{data.title}</strong>
                    </div>
                    <p className="text-detail text-center mt-3">
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
