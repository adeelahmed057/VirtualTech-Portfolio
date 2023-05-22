import React from "react";

import HeroSection from "../component/HomePage/heroSection/heroSection";
import Createmarket from "../component/HomePage/creativeMarket/index";
import SliderComp from "../component/HomePage/slider/slider";
import VirtualValley from "../component/HomePage/virtualValley/virtualValley";
import EveryBusiness from "../component/HomePage/everyBusiness/everybusiness";
import Designing from "../component/HomePage/designing/designing";
import EngagementModels from "../component/HomePage/engagementModels/engagementModels";
import TopLevel from "../component/HomePage/topLevel/topLevel";
import AndroidApp from "../component/HomePage/androidApp/androidApp";
import EveryIndustry from "../component/HomePage/everyIndustry/everyIndustry";
import AllCollapseExample from "../component/HomePage/frequentlyAccordion/frequentlyAccordion";
import "./home.css";

function Home() {
  return (
    <div className="App-bg">
   
      <HeroSection />
      <Createmarket />
      <SliderComp />
      <VirtualValley />
      <EveryBusiness />
      <Designing />
      <EngagementModels />
      <TopLevel />
      <AndroidApp />
      <EveryIndustry />
      <AllCollapseExample />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
