import React from "react";
import "./everyIndustry.css";
import Line from "../../assets/Image/UnderLine-01.svg";
import Picture from "../../assets/Image/capture.png";
const data = [
  {
    image: Picture,
    title: "Healthcare",
    describtion:
      "Decentralize operations, boost data security, and manage patient and employee records effectively using our blockchain software development solutions. The use of blockchain technology opens up new job opportunities in various industries. Blockchain also broadens the area of labor by removing regional barriers.  ",
  },
  {
    image: Picture,
    title: "Logistics",
    describtion:
      "Keep track of the entire journey of products and services via an immutable block of information. Experience easy traceability and complete transparency and lower the possibility of duplication with blockchain software development services for logistics.",
  },
  {
    image: Picture,
    title: "Finance",
    describtion:
      "With decentralized finance, you may avoid the inconvenience of intermediaries and make P2P transactions with a single click. Track transaction history and ensure anonymity when making purchases with tailored solutions from the UAE blockchain software developers.",
  },
  {
    image: Picture,
    title: "Ecommerce",
    describtion:
      "In e-commerce, blockchain is a solution that will increase efficiency. Blockchain technology may assist in managing and monitoring supply chains, order fulfilment, inventory updates, saving shipping costs, and speeding up order confirmation and checkout.  ",
  },
  {
    image: Picture,
    title: "Education",
    describtion:
      "Using blockchain, enable unrestricted access to study materials and other resources. With our digital solutions, you may have improved verification features, protect student and faculty information, and easily issue certifications for various courses.",
  },
  {
    image: Picture,
    title: "Gaming",
    describtion:
      "We provide blockchain gaming solutions where users can play and earn as a top blockchain software development firm in Dubai. Integrate games with cryptocurrencies and other digital assets to improve the user experience and decentralise gaming.        ",
  },
];
function EveryIndustry() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <h1 className="Text-heading text-center">
            Serving Every Industry With Unmatched Blockchain Software
            Development Services
          </h1>
          <div className="text-center">
            <img src={Line} className="img-fluid" alt="" width={"50%"} />
          </div>
          <p className="text-detail text-center mt-3">
            We have extensive experience across a wide range of industries. We
            have been delivering blockchain software solutions in Dubai for over
            5 years and have helped businesses of all sizes.
          </p>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
          <div className="row">
            {data.map((data) => {
              return (
                <>
                  <div class="col-lg-4  col-md-12 mt-4">
                    <div class="card " style={{ height: "100%" }}>
                      <img
                        src={data.image}
                        class="card-img-top"
                        alt="..."
                        width={"80%"}
                      />
                      <div class="card-body text-center">
                        <h3 class="card-title text-center mt-3">
                          {data.title}
                        </h3>
                        <img src={Line} className="img-fluid" width={"50%"} />
                        <p class="card-text text-center mt-3">
                          {data.describtion}
                        </p>
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
  );
}

export default EveryIndustry;
