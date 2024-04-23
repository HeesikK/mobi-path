import styled from "styled-components";
import { flexCenter } from "../../style/common.style";
import CustomInput from "../../components/input";
import CustomButton from "../../components/button";

const SignIn = () => {
  return (
    <Wrapper>
      <CustomInput variant={"primary"} size={"large"} shape={"shape"} label={"아이디"} placeholder={"아이디를 입력해주세요"} />
      <CustomInput variant={"primary"} size={"large"} shape={"shape"} label={"비밀번호"} placeholder={"비밀번호를 입력해주세요"} />
      <CustomButton variant={"primary"} size={"large"} shape={"shape"}>
        로그인
      </CustomButton>
    </Wrapper>
  );
};
export default SignIn;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  height: 100vh;
  & > * {
    margin-bottom: 10px;
  }
`;
