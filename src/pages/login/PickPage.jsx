import styled from "styled-components";
import { useState, useEffect } from "react";
import { selecKeyword } from "../../api/selecKeyword";

const PickPage = () => {
  const [keyword, setKeyword] = useState([]);

  const GetSelecKeyword = async () => {
    const res = await selecKeyword();
    console.log(res.data);
    setKeyword(res.data);
  };

  useEffect(() => {
    GetSelecKeyword();
  }, []);

  return (
    <Wrapper>
      <Title>당신의 취향을 선택해주세요</Title>
      <Container>
        {keyword?.map((el) => (
          <Box key={el.index}>{el.name}</Box>
        ))}
      </Container>
    </Wrapper>
  );
};

export default PickPage;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 70%;
  margin-top: 30px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  border: 1px solid white;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  color: white;
  font-size: 20px;

  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
`;
