import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const goPick = () => {
    navigate("/login/pick");
  };

  return (
    <Container>
      <Title>IndiePicks</Title>
      <Login onClick={goPick}>로그인</Login>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  height: 50px;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const Title = styled.div`
  font-size: 30px;
  color: white;
`;

const Login = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  color: white;
  margin-right: 30px;
  cursor: pointer;
`;
