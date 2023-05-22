import React from "react";
import "./android.css";
import UnderLine from "../../../assets/Image/UnderLine-01.svg";
const data = [
  {
    //   icon: Icon1,
    heading: "Ideation",
    title:
      " The first stage is to define the scope of the project and develop a strategy. We take down your needs, analyze the project, and provide you with a process estimate.  ",
    point1: "Expert Consultation",
    point2: "Cost Estimationn",
    point3: " Quick Resolutio",
  },
  {
    //   icon: Icon2,
    heading: "Build a Proof of Concept",
    title:
      "Once we've thoroughly assessed your unique requirements, we'll determine the ideal technology stack for your blockchain software development. Once we have achieved that, we will proceed to crafting a prototype to authenticate and validate our development approach. ",
    point1: "Define the Tech Stack",
    point2: "Test Real Life Application",
    point3: "Create a Demo",
    // point4: "Systematic Project Updation",
  },
  {
    //   icon: Icon3,
    heading: "Design and Development",
    title:
      "We begin the design and development process after receiving permission. Our experts use innovative technology to build the structure of your product and construct the functionality.",
    point1: "Detailed Plan Review",
    point2: "Develop a wireframe",
    point3: "Add Functionalities",
    // point4: "Increased Brand Credibility",
  },
  {
    //   icon: Icon1,
    heading: "Testing",
    title:
      "Our team of testers perform thorough internal and external testing prior to the final deployment. During testing, all problems and vulnerabilities are discovered and eradicated.      ",
    point1: "Deploy Test Cases",
    point2: "Detecting Bugs",
    point3: "Optimize Performance",
  },
  {
    //   icon: Icon2,
    heading: "Deployment",
    title:
      "Once the product has passed the testing phase, we will deploy it on the platform of your choosing and closely monitor its performance to guarantee there are no issues.",
    point1: "Preparation",
    point2: "Testing",
    point3: "Deployment",
    // point4: "Systematic Project Updation",
  },
  {
    //   icon: Icon3,
    heading: "Maintenance and Support",
    title:
      "We ensure optimal performance after deployment by periodically upgrading and scaling the software as needed. Even after the project is completed, our crew remains available for assistance.",
    point1: "Technical Advice",
    point2: "Updates to software",
    point3: "Upgrades",
  },
];

function AndroidApp() {
  return (
    <div className="android-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8 col-sm-12 mt-5 mb-5">
            <h1 className="text-center Text-heading">
              Our Blockchain Android App Development Methodologies
            </h1>
            <div className="text-center">
              <img src={UnderLine} className="img-fluid" width={"50%"} />
            </div>
            <p className="text-center text-detail mt-3">
              The success or failure of a project ultimately boils down to the
              planning and execution of the idea behind it. At our team, we
              adhere to a comprehensive development process that guarantees no
              detail goes unnoticed, offering unparalleled results.
            </p>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-5">
                <div className="row ">
                  {data.map((data) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-12 col-sm-12 mt-4">
                          <div
                            className="card card-1"
                            style={{ height: "400px" }}
                          >
                            <div className="text-left m-4">
                              <h3 className="">{data.heading}</h3>
                              <h6 className=" mt-4">{data.title}</h6>
                              <ul className="mt-4">
                                <li>{data.point1}</li>
                                <hr />
                                <li>{data.point2}</li>
                                <hr />
                                <li>{data.point3}</li>
                              </ul>
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
      </div>
    </div>
  );
}

export default AndroidApp;
