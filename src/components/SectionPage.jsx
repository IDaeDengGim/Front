import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./section_swiper.css";

// 이미지
import poster1 from "../assets/괴물포스터.jpeg";

const SectionPage = () => {
  return (
    <div>
      <Swiper slidesPerView={4} spaceBetween={50} className="section-Swiper">
        <SwiperSlide>
          <img src={poster1} style={{ marginLeft: "50px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={poster1} style={{ marginLeft: "50px" }} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={poster1} style={{ hieght: "30px", marginLeft: "50px" }} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={poster1} style={{ hieght: "30px", marginLeft: "50px" }} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={poster1} style={{ hieght: "30px", marginLeft: "50px" }} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={poster1} style={{ hieght: "30px", marginLeft: "50px" }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SectionPage;
