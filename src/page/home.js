import React from "react";
import NavbaaComp from "../component/header/navbar";
import HeroSection from "../component/heroSection/heroSection";
import Createmarket from "../component/creativeMarket/index";
import SliderComp from "../component/slider/slider";
import VirtualValley from "../component/virtualValley/virtualValley";
import EveryBusiness from "../component/everyBusiness/everybusiness";

function Home() {
  return (
    <div>
      <NavbaaComp />
      <HeroSection />
      <Createmarket />
      <SliderComp />
      <VirtualValley />
      <EveryBusiness />
    </div>
  );
}

export default Home;
