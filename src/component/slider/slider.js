import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../../assets/Slider/Virtual Tech Web-01.png";
import nft2 from "../../assets/Slider/Virtual Tech Web-02.png";
import nft3 from "../../assets/Slider/Virtual Tech Web-03.png";
import nft4 from "../../assets/Slider/Virtual Tech Web-04.png";
import nft5 from "../../assets/Slider/Virtual Tech Web-05.png";
import nft6 from "../../assets/Slider/Virtual Tech Web-06.png";
import nft7 from "../../assets/Slider/Virtual Tech Web-07.png";

// Import Swiper styles
import "./slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function SliderComp() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-md-12 slider-bg">
            <Swiper
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <div className="col-md-8">
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={Logo} className="img-fluid" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img
                      src={nft2}
                      className="img-fluid"
                      alt=""
                      width={"350px"}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft3} className="img-fluid" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft4} className="img-fluid" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={Logo} className="img-fluid" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft2} className="img-fluid" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft3} className="img-fluid" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft4} className="img-fluid" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft6} className="img-fluid" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft2} className="img-fluid" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft7} className="img-fluid" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 img-hover-zoom">
                    <img src={nft5} className="img-fluid" alt="" />
                  </div>
                </SwiperSlide>
              </div>
              {/* <SwiperSlide>Slide 8</SwiperSlide>
              {/* <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
