import React from "react";
import "./frequenltyAccordion.css";
const accordionData = [
  {
    title: "How much does it cost for blockchain android app development?",
    key: "1",
    detail:
      "The blockchain android app development costs around$ 60,000 to$ 150,000. Depending upon the customizations, such as integrated features, technological heaps, complications involved in the design, and the geographical position of the blockchain software masterminds, the budget is decided.",
  },
  {
    key: "2",
    title:
      "What are some of the stylish Blockchain Software Development Services? ",
    detail:
      "Blockchain Security, Smart Contract Development, decentralized exchange, Custom Blockchain Development results, Blockchain Consulting, and NFT business development are among the stylish Blockchain Software Development Services offered by the blockchain companies.",
  },
  {
    title: "Which are the core blockchain software results? ",
    detail:
      "Some of the abecedarian blockchain software results are NFT launches, web3 integrations, play- to- earn gaming, DeFi ecosystems, and smart contract results.",
  },
  {
    title: "What's our Blockchain Development Process?",
    detail:
      "We use nimble methodology in our blockchain development process, including design creativity, planning, development/ designing, testing, launch, deployment, and conservation.",
  },
  {
    title: "How much does blockchain software  inventors in the UAE charge?",
    detail:
      "The blockchain software  inventors in UAE charge around$ 75-$ 100 Per Hour, depending upon the  design's  complications.",
  },
  {
    title: "What are some of the blockchain business  operations?  ",
    detail:
      "Blockchain  operations in  colorful  diligence include healthcare, real estate,  force chain operation, entertainment, finance & insurance,etc.",
  },
  {
    title: "Which is the Blockchain Software Development Company in Dubai? ",
    detail:
      "VirtualTech.,RisingMaxInc., and Stylish Web3 Development are among the swish blockchain software development companies in Dubai. ",
  },
  {
    title: "Which blockchain development platforms do we use?",
    detail:
      "As the topmost blockchain development company, we've experience working on platforms like Ethereum, Corda, hyperledger, and Hedera Hashgraph.",
  },
];

function FrequentlyAccordion() {
  return (
    <div className="container">
      <div className="row jusitfy-content-center">
        {accordionData.map((data, index) => {
          return (
            <>
              <div
                className="col-lg-6
         col-md-12 mt-4"
              >
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                  key={index}
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id={data.key}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        {data.title}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby={data.keyd}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">{data.detail}</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        {/* <div
          className="col-lg-6
         col-md-12"
        >
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6
         col-md-12"
        >
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6
         col-md-12"
        >
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default FrequentlyAccordion;
