import React from 'react';
// import underline from '../../assets/Image/UnderLine-01.svg';
// import brand from '../../assets/Image/monsters-logo-.webp';
// import column from '../../assets/Image/universal-monester-screen.webp';
import ComingSoon from "../../assets/Coming Soon/comingsoon.png";

import './portfolio.css';

const Portfolio = () => {
  

  //   const data = [
  //       {
  //         brandImage: brand,
  //         brandHead: "Universal Monsters",
  //         brandIntro: "Online Clothing Store",
  //         brandPara: "Universal Monsters is a website selling special monster apparel that infuses NFTs with clothing. They embed special NFC chips in their hoodies and beanies that can be scanned to access the hidden NFT. The full suite of features of the store is designed using advanced tech stacks like Ethereum, Nodejs and Metamask",
  //         columnImage: column,
  //       },
  //       {
  //           brandImage: brand,
  //           brandHead: "Universal Monsters",
  //           brandIntro: "Online Clothing Store",
  //           brandPara: "Universal Monsters is a website selling special monster apparel that infuses NFTs with clothing. They embed special NFC chips in their hoodies and beanies that can be scanned to access the hidden NFT. The full suite of features of the store is designed using advanced tech stacks like Ethereum, Nodejs and Metamask",
  //           columnImage: column,
  //         },
  //         {
  //           brandImage: brand,
  //           brandHead: "Universal Monsters",
  //           brandIntro: "Online Clothing Store",
  //           brandPara: "Universal Monsters is a website selling special monster apparel that infuses NFTs with clothing. They embed special NFC chips in their hoodies and beanies that can be scanned to access the hidden NFT. The full suite of features of the store is designed using advanced tech stacks like Ethereum, Nodejs and Metamask",
  //           columnImage: column,
  //         },
  //         {
  //           brandImage: brand,
  //           brandHead: "Universal Monsters",
  //           brandIntro: "Online Clothing Store",
  //           brandPara: "Universal Monsters is a website selling special monster apparel that infuses NFTs with clothing. They embed special NFC chips in their hoodies and beanies that can be scanned to access the hidden NFT. The full suite of features of the store is designed using advanced tech stacks like Ethereum, Nodejs and Metamask",
  //           columnImage: column,
  //         },
  //     ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-sm-12 text-center mt-5 mb-5">
          <img src={ComingSoon} className="img-fluid" alt="" width={"60%"} />
        </div>
      </div>
    </div>
  //   <>
  //     <div className="container">
  //       <div className="row justify-content-center">
  //           <div className="Text-heading dis text-center">
  //             <h2 className='display-3'>Our Portfolio</h2>
  //             <img src={underline} alt="Heading Underlined" className='img-fluid w-50' />
  //           </div>
  //           <div className="col">
  //            {data.map((data) => {
  //               return(   
  //             <div className="card p-3 d-flex flex-lg-row align-items-center my-5">
  //               <div className="col-lg-6 col-md-12">
  //                 <div className="brand_head d-flex flex-lg-row flex-column justify-content-lg-start justify-content-center align-items-center gap-2">
  //                   <img src={data.brandImage} alt="Brand Logo" />
  //                   <div className="brand_head_head text-lg-start text-center">
  //                     <h3 className=''>{data.brandHead}</h3>
  //                     <h4 className='text-center'>{data.brandIntro}</h4>
  //                   </div>
  //                 </div>
  //                 <div className="brand_para mt-3 text-lg-start text-center">
  //                   <p>{data.brandPara}</p>
  //                 </div>
  //               </div>   
  //               <div className="col-lg-6 col-md-12 text-center">
  //                 <img src={data.columnImage} alt="" className='img-fluid w-75' />    
  //               </div> 
  //             </div>
  //             )
  //           })}; 
  //           </div>
  //       </div>
  //     </div>
    // </>
  )
}

export default Portfolio;