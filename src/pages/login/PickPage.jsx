import styled from "styled-components";

const PickPage = () => {
  return (
    <Wrapper>
      <Title>당신의 취향을 선택해주세요</Title>
      <Container>
        <Box>로맨스</Box>
        <Box>로맨스</Box>
        <Box>로맨스</Box>
        <Box>로맨스</Box>
        <Box>로맨스</Box>
        <Box>로맨스</Box>
        <Box>로맨스</Box>
        <Box>로맨스</Box>
        <Box>로맨스</Box>
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
