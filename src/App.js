import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./page/home";
import Portfolio from "./page/portfolio/portfolio";
import NavbaaComp from "../src/component/header/navbar";
import Footer from "../src/component/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./page/contact/contact";
import Web3 from "./page/web3/web3";
import Metaverse from "./page/metaverse/metaverse";
import Application from "./page/app/app";
import Software from "./page/software/software";
import AI from "./page/ai/ai";
import IOT from "./page/iot/iot";
import ChatBot from "./page/chatBot/chatBot";
import AboutUs from "./page/aboutus/aboutUs";

function App() {
  return (
    <div className="App-bg">
      <BrowserRouter>
        <NavbaaComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="web3" element={<Web3 />} />
          <Route path="metaverse" element={<Metaverse />} />
          <Route path="app" element={<Application />} />
          <Route path="software" element={<Software />} />
          <Route path="ai" element={<AI />} />
          <Route path="iot" element={<IOT />} />
          <Route path="chatbot" element={<ChatBot />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
