import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./section_swiper.css";

// 이미지
import poster1 from "../assets/괴물포스터.jpeg";

const SectionPage = () => {
  return (
    <Wrapper>
      <Swiper slidesPerView={4} spaceBetween={0} className="section-Swiper">
        <SwiperSlide>
          <img src={poster1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={poster1} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={poster1} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={poster1} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={poster1} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={poster1} />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default SectionPage;

const Wrapper = styled.div`
  height: 300px;
`;
