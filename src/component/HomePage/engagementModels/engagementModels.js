import React from "react";
import UnderLine from "../../../assets/Image/UnderLine-01.svg";
import Icon1 from "../../../assets/Icon/teampriceidea-03.svg";
import Icon2 from "../../../assets/Icon/teampriceidea-02.svg";
import Icon3 from "../../../assets/Icon/teampriceidea-01.svg";
import "./engagement.css";

const cardData = [
  {
    icon: Icon1,
    heading: "Fixed Price model",
    title:
      "We have set aside a definitive budget for compensating the developers who shall undertake the blockchain development project.",
    point1: "A Budget That Is Predictable",
    point2: "Determine timelines",
    point3: "No Extra Charge",
    point4: "Excellent Working Procedures",
  },
  {
    icon: Icon2,
    heading: "Dedicated Team",
    title:
      "Our team of blockchain experts has developed a completely customized platform available on an hourly basis.",
    point1: "Flexible Scope",
    point2: "Iterative Process",
    point3: "Payment Per Hour",
    point4: "Systematic Project Updation",
  },
  {
    icon: Icon3,
    heading: "White Label Solution",
    title:
      "To create the desired blockchain platform, we leverage the existing functionalities and features at our disposal.",
    point1: "Individualised Solutions",
    point2: "Cost-Effective",
    point3: "Reduced Risk",
    point4: "Increased Brand Credibility",
  },
];

function EngagementModels() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-lg-7 col-md-10 col-sm-12">
          <h1 className="Text-heading text-center">
            Our Stunning Models for Engaging with Blockchain Software
          </h1>
          <div className="text-center">
            <img src={UnderLine} className="img-fluid " width={"50%"} />
          </div>
          <p className="text-detail text-center mt-3">
            Choose the model that best matches your needs. Each model is
            intended to provide our clients with job efficiency and output
            pleasure.
          </p>
        </div>
        <div className="col-lg-12 col-md-12 mt-5 mb-5">
          <div className="row">
            {cardData.map((data) => {
              return (
                <>
                  <div className="col-lg-4 col-md-12 col-sm-12 mt-5">
                    <div className="card card-1">
                      <div className="text-center mt-3">
                        <img
                          src={data.icon}
                          className="img-fluid"
                          width={"20%"}
                        />
                      </div>
                      <div className="text-center m-4">
                        <h3 className="">{data.heading}</h3>
                        <h6 className=" mt-3">{data.title}</h6>
                        <ul className="mt-3">
                          <li>{data.point1}</li>
                          <hr />
                          <li>{data.point2}</li>
                          <hr />
                          <li>{data.point3}</li>
                          <hr />
                          <li>{data.point4}</li>
                          <hr />
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {/* <div className="col-md-4">
              <div className="card card-2">
                <h3>UI Components</h3>
                <p>
                  Tabs, buttons, inputs, lists, cards, and more! A comprehensive
                  library of mobile UI components, ready to go.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-3">
                <h3>Theming</h3>
                <p>
                  Learn how to easily customize and modify your app’s design to
                  fit your brand across all mobile platform styles.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EngagementModels;
