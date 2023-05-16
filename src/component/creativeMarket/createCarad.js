import React from "react";
import ImageOne from "../../assets/create market/enterprise.png";
import ImageTwo from "../../assets/create market/marketplace.png";
import ImageThree from "../../assets/create market/Metaverse.png";
import ImageFour from "../../assets/create market/walletdevelopment.png";
import ImageFive from "../../assets/create market/P2E.png";
import ImageSix from "../../assets/create market/etherum.png";
import ImageSeven from "../../assets/create market/smartContract.png";
import ImageEight from "../../assets/create market/cloud.png";
import ImageNine from "../../assets/create market/blockchain-security.png";

const data = [
  {
    image: ImageOne,
    title: "Enterprise Blockchain Consultant",
    description:
      "Our professional team of consultants provides outstanding guidance on techniques for optimising business operations. They begin by thoroughly evaluating the blockchain and carrying out the intended strategy.",
  },
  {
    image: ImageTwo,
    title: "NFT Marketplace Development",
    description:
      "Our proficient blockchain software developers offer comprehensive full-stack blockchain software development services. Our dedicated team of blockchain NFT engineers is tirelessly working towards crafting an exceptionally scalable and fortified decentralized software solution. Partner with us for top-notch blockchain development services that drive innovation and security.",
  },
  {
    image: ImageThree,
    title: "Metaverse Development",
    description:
      "Virtual Tech, a reputable Dubai-based company specializing in Blockchain Software Development, provides expert assistance in token creation across various platforms including Ethereum, Binance Smart Chain, TRON, Tezos, and more. Unlock the potential of tokenization with our cutting-edge solutions and innovative approach to blockchain technology",
  },
  {
    image: ImageFour,
    title: "Blockchain Wallet Development",
    description:
      "Engage skilled virtual technology developers to design a cutting-edge cryptocurrency wallet boasting cross-platform capabilities, top-notch security features, and exceptional smart contract performance. Our bespoke blockchain wallet development solutions significantly enhance transaction security, ensuring peace of mind",
  },
  {
    image: ImageFive,
    title: "P2E Game Development",
    description:
      "Unlock the World of Blue-Chip Play-to-Earn Game Development in Dubai with Our Expert Blockchain Specialists. From Ideation and Design to Game Creation and Implementation, Our Seasoned Team Offers Comprehensive Blockchain-Driven Services. Partner with Us to Experience Excellence and Innovation in Every Aspect of Game Development",
  },
  {
    image: ImageSix,
    title: "Ethereum Development",
    description:
      "•	Experience the Expertise of Our Blockchain Software Engineers in Building Robust Blockchain-Based Computing Platforms. Our Professionals Excel in Developing Decentralized Applications (DApps) Empowering Network Members to Drive Decision-Making Processes.",
  },
  {
    image: ImageSeven,
    title: "Smart Contract Development",
    description:
      "Empower Your Business with Custom-Designed Smart Contracts Tailored to Your Project's Requirements. Trust in Our Expertise to Deploy Smart Contracts with Unwavering Confidence, Transparency, Security, Speed, and Efficiency.",
  },
  {
    image: ImageEight,
    title: "Cloud Blockchain Development",
    description:
      "Leverage the Power of Leading Cloud Platforms like Microsoft Azure, IBM Blockchain Platform, Google Cloud Platform, and Amazon Managed Blockchain to Optimize Data Storage, Processing, and Management. Experience the Benefits of Secure and Efficient Remote Server Solutions.",
  },
  {
    image: ImageNine,
    title: "Blockchain Security",
    description:
      "Fortify Your Systems Against Cyber Threats with Our Comprehensive Blockchain Security Solution. Experience the Power of Robust Cybersecurity Frameworks, Advanced Risk Management Systems, Multiple Security Layers, High-Speed Data Transfer Processors, and Cost-Effective Compliance Measures.",
  },
];
function CreateCarad() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-between ">
        {data.map((data) => {
          return (
            <>
              <div className="col-lg-3 col-md-5 col-sm-12 border-gradient border-gradient-purple mt-3 mb-3">
                <div className="row justify-content-center ">
                  <div className="col-md-10 mt-3 mb-3">
                    <div className="text-center">
                      <img
                        src={data.image}
                        className="img-fluid"
                        width={"100px"}
                        alt=""
                      />
                    </div>
                    <div className="mt-3">
                      <h6 className="text-center text-white text-title mb-3">
                        <strong>{data.title}</strong>
                      </h6>
                      <p className="mt-2 text-description">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CreateCarad;
