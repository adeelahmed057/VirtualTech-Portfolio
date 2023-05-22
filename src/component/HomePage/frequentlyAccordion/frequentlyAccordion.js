import React from "react";
import "./frequenltyAccordion.css";
import Line from "../../../assets/Image/UnderLine-01.svg";

import Accordion from "react-bootstrap/Accordion";
const accordionData = [
  {
    title: "How much does it cost for blockchain android app development?",
    key: 1,
    detail:
      "The blockchain android app development costs around$ 60,000 to$ 150,000. Depending upon the customizations, such as integrated features, technological heaps, complications involved in the design, and the geographical position of the blockchain software masterminds, the budget is decided.",
  },
  {
    key: 2,
    title:
      "What are some of the stylish Blockchain Software Development Services? ",
    detail:
      "Blockchain Security, Smart Contract Development, decentralized exchange, Custom Blockchain Development results, Blockchain Consulting, and NFT business development are among the stylish Blockchain Software Development Services offered by the blockchain companies.",
  },
  {
    key: 3,
    title: "Which are the core blockchain software results? ",
    detail:
      "Some of the abecedarian blockchain software results are NFT launches, web3 integrations, play- to- earn gaming, DeFi ecosystems, and smart contract results.",
  },
  {
    key: 4,
    title: "What's our Blockchain Development Process?",
    detail:
      "We use nimble methodology in our blockchain development process, including design creativity, planning, development/ designing, testing, launch, deployment, and conservation.",
  },
  {
    key: 5,
    title: "How much does blockchain software  inventors in the UAE charge?",
    detail:
      "The blockchain software  inventors in UAE charge around$ 75-$ 100 Per Hour, depending upon the  design's  complications.",
  },
  {
    key: 7,
    title: "What are some of the blockchain business  operations?  ",
    detail:
      "Blockchain  operations in  colorful  diligence include healthcare, real estate,  force chain operation, entertainment, finance & insurance,etc.",
  },
  {
    key: 8,
    title: "Which is the Blockchain Software Development Company in Dubai? ",
    detail:
      "VirtualTech.,RisingMaxInc., and Stylish Web3 Development are among the swish blockchain software development companies in Dubai. ",
  },
  {
    key: 9,
    title: "Which blockchain development platforms do we use?",
    detail:
      "As the topmost blockchain development company, we've experience working on platforms like Ethereum, Corda, hyperledger, and Hedera Hashgraph.",
  },
];

function AllCollapseExample() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 col-md-12 col-sm-12 mt-5">
          <h1 className="Text-heading text-center">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="col-lg-5 col-md-12 mt-3">
          <div className="text-center">
            <img src={Line} className="img-fluid" alt="" width={"70%"} />
          </div>
        </div>
        <div className="row justify-content-between mt-5">
          {accordionData.map((data) => {
            return (
              <>
                <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
                  <Accordion className="accordion-bg">
                    <div className="col-md-12">
                      <Accordion.Item
                        eventKey={data.key}
                        className=" accordion-bg"
                      >
                        <Accordion.Header className=" accordion-bg">
                          {data.title}
                        </Accordion.Header>
                        <Accordion.Body>{data.detail}</Accordion.Body>
                      </Accordion.Item>
                    </div>
                  </Accordion>
                </div>
              </>
            );
          })}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default AllCollapseExample;
