import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button";
import styled from "styled-components";
import { flexCenter } from "../../style/common.style";

const HomePage = () => {
  const navigate = useNavigate();

  const goSignInPage = () => {
    navigate("/sign-in");
  };

  const goSignUpPage = () => {
    navigate("/sign-up");
  };
  return (
    <Wrapper>
      <CustomButton variant={"primary"} size={"large"} shape={"shape"} onClick={goSignInPage}>
        로그인
      </CustomButton>
      <CustomButton variant={"primary"} size={"large"} shape={"shape"} onClick={goSignUpPage}>
        회원가입
      </CustomButton>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  height: 100vh;
  & > * {
    margin-bottom: 15px;
  }
`;
