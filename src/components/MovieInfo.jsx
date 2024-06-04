import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getMovie } from "../api/getMovie";
import { Navigate, useNavigate } from "react-router-dom";

const MovieInfo = () => {
  const [movie, setMovie] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  // id값에서 : 없앰
  const iid = id.replace(":", "");

  // 세부 정보 get
  const GetMovie = async () => {
    const res = await getMovie();
    console.log(res.data);
    const movieData = res.data.find((movie) => movie.id === parseInt(iid));
    setMovie(movieData);
    console.log(movieData);
  };

  // 페이지 로드시 한 번만 api get
  useEffect(() => {
    GetMovie();
  }, []);

  return (
    <Wrapper>
      {movie ? (
        <>
          <Title>{movie?.title}</Title>
          <Item>
            <img
              src={movie?.img}
              alt="poster"
              style={{ width: "330px", height: "500px", marginRight: "50px" }}
            />
            <InfoItem>
              <Name>감독: {movie?.director}</Name>
              <Info>장르: {movie?.genres.map((item) => item)}</Info>
              <Info>
                {movie?.grade} | {movie?.color} | {movie?.year.slice(0, 4)} |{" "}
                {movie?.time}
              </Info>
              <Info>{movie?.synopsys}</Info>
            </InfoItem>
          </Item>
        </>
      ) : (
        <Loading>로딩중...</Loading>
      )}
    </Wrapper>
  );
};

export default MovieInfo;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: white;
  margin-bottom: 60px;
  margin-top: 30px;
`;
const InfoItem = styled.div`
  width: 50vw;
`;

const Loading = styled.div`
  color: white;
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Poster = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px;
`;

const Info = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin-top: 2px;
  margin-bottom: 20px;
`;
