import React from "react";
import "./topLevel.css";
import Line from "../../assets/Image/UnderLine-01.svg";
const data = [
  {
    no: "01",
    title: "Greater Efficiency",
    description:
      "Conventional processes are prone to mistakes and require the longest time. Our customised blockchain solutions aid in the efficient execution of procedures.",
  },
  {
    no: "02",
    title: "Automation",
    description:
      "Without human interaction, the transactions are produced automatically. Smart contracts enable quicker and more seamless transactions.",
  },
  {
    no: "03",
    title: "Enhanced Transparency",
    description:
      "The transaction in progress is immutable, allowing network members to observe the whole transaction history, boosting transparency. ",
  },
  {
    no: "04",
    title: "Greatest Security",
    description:
      "The utilisation of new technology, such as updated tools, software, and programming languages, aids in data security at all levels.",
  },
];
function TopLevel() {
  return (
    <div className="top-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12 mt-5 mb-5">
            <h2 className="Text-heading text-center">
              Top-Level Features of Our Customised Blockchain Software Solutions
            </h2>
            <div className="text-center">
              <img src={Line} className="img-fluid" width={"50%"} />{" "}
            </div>
            <p className="text-detail text-center mt-4">
              Get ready to discover the numerous benefits of our blockchain
              software solutions, which can guide businesses towards initiating
              their blockchain development journey.
            </p>
          </div>
          <div className="col-lg-12 col-md-12 mt-3">
            <div className="row justify-content-around">
              {data.map((data) => {
                return (
                  <>
                    <div className="col-lg-5 col-md-10 col-sm-11 mt-3 mb-3">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-3 ">
                          <h1 className="text-center text-number">{data.no}</h1>
                        </div>
                        <div className="col-md-9">
                          <h1 className="top-heading">{data.title}</h1>
                          <p className="text-detail">{data.description}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopLevel;
