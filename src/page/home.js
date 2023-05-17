import React from "react";
import NavbaaComp from "../component/header/navbar";
import HeroSection from "../component/heroSection/heroSection";
import Createmarket from "../component/creativeMarket/index";
import SliderComp from "../component/slider/slider";
import VirtualValley from "../component/virtualValley/virtualValley";
import EveryBusiness from "../component/everyBusiness/everybusiness";
import Designing from "../component/designing/designing";
import EngagementModels from "../component/engagementModels/engagementModels";
import TopLevel from "../component/topLevel/topLevel";
import AndroidApp from "../component/androidApp/androidApp";
import EveryIndustry from "../component/everyIndustry/everyIndustry";

function Home() {
  return (
    <div>
      <NavbaaComp />
      <HeroSection />
      <Createmarket />
      <SliderComp />
      <VirtualValley />
      <EveryBusiness />
      <Designing />
      <EngagementModels/>
      <TopLevel/>
      <AndroidApp/>
      <EveryIndustry/>
    </div>
  );
}

export default Home;
