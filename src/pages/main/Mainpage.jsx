import styled from "styled-components";
import Nav from "../../components/Nav";
import SectionPage from "../../components/SectionPage";
import { Navigate, useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { getMovie } from "../../api/getMovie";

// 이미지 import
import movie from "../../assets/영화 포스터.jpeg";
import movie2 from "../../assets/포스터2.jpeg";
import poster1 from "../../assets/괴물포스터.jpeg";
import poster2 from "../../assets/아가씨포스터.webp";
import poster3 from "../../assets/나니아포스터.webp";

const MainPage = () => {
  const navigate = useNavigate();

  const goInfo = () => {};

  const [movie, setMovie] = useState([]);

  const GetMovie = async () => {
    const res = await getMovie();
    console.log(res.data);
    setMovie(res.data.slice(4));
  };

  useEffect(() => {
    GetMovie();
  }, []);

  return (
    <Container>
      <Nav />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={movie2} alt="poster" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={movie2} alt="poster" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={movie2} alt="poster" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={movie2} alt="poster" />
        </SwiperSlide>
      </Swiper>
      <Wrapper>
        <Section>
          <Title>지금 인기있는 영화</Title>
          <Poster>
            {movie?.map((el) => (
              <Item>
                <img
                  src={el.img}
                  alt="poster"
                  style={{
                    height: "200px",
                    width: "150px",
                    marginBottom: "7px",
                    cursor: "pointer",
                  }}
                />

                <Name>{el.title}</Name>
                <Info>
                  {el.grade} | {el.time}
                </Info>
              </Item>
            ))}
          </Poster>
        </Section>
        <Section>
          <Title>00님의 취향 영화</Title>
          <Poster>
            <Item onClick={goInfo}>
              <img
                src={poster2}
                alt="poster"
                style={{ height: "200px", width: "150px", marginBottom: "7px" }}
              />
              <Name>아가씨</Name>
              <Info>아르헨티나 2021 | 65min</Info>
            </Item>
            <Item>
              <img
                src={poster2}
                alt="poster"
                style={{ height: "200px", width: "150px", marginBottom: "7px" }}
              />
              <Name>아가씨</Name>
              <Info>아르헨티나 2021 | 65min</Info>
            </Item>
            <Item>
              <img
                src={poster2}
                alt="poster"
                style={{ height: "200px", width: "150px", marginBottom: "7px" }}
              />
              <Name>괴물</Name>
              <Info>아르헨티나 2021 | 65min</Info>
            </Item>
            <Item>
              <img
                src={poster2}
                alt="poster"
                style={{ height: "200px", width: "150px", marginBottom: "7px" }}
              />
              <Name>괴물</Name>
              <Info>아르헨티나 2021 | 65min</Info>
            </Item>
          </Poster>
        </Section>
        <Section>
          {/* 보고있던 영화 섹션 */}
          <Title>보고 있던 영화</Title>
          <Poster>
            <Item onClick={goInfo}>
              <img
                src={poster3}
                alt="poster"
                style={{ height: "200px", width: "150px", marginBottom: "7px" }}
              />
              <Name>아가씨</Name>
              <Info>아르헨티나 2021 | 65min</Info>
            </Item>
            <Item>
              <img
                src={poster3}
                alt="poster"
                style={{ height: "200px", width: "150px", marginBottom: "7px" }}
              />
              <Name>아가씨</Name>
              <Info>아르헨티나 2021 | 65min</Info>
            </Item>
            <Item>
              <img
                src={poster3}
                alt="poster"
                style={{ height: "200px", width: "150px", marginBottom: "7px" }}
              />
              <Name>괴물</Name>
              <Info>아르헨티나 2021 | 65min</Info>
            </Item>
            <Item>
              <img
                src={poster3}
                alt="poster"
                style={{ height: "200px", width: "150px", marginBottom: "7px" }}
              />
              <Name>괴물</Name>
              <Info>아르헨티나 2021 | 65min</Info>
            </Item>
          </Poster>
        </Section>
        <Section>
          <Title>영화제를 휩쓴 영화</Title>
          <SectionPage />
        </Section>
      </Wrapper>
    </Container>
  );
};

export default MainPage;

const Container = styled.div``;

// const SwiperSlide = styled(SwiperSlide)`
//   height: 100px;
// `;

const Wrapper = styled.div`
  padding: 10px;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
`;

const Section = styled.div`
  height: fixed 300px;
  border: 1px solid black;
  margin-top: 10px;
`;

const Poster = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: white;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Info = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: white;
  margin-top: 2px;
`;
