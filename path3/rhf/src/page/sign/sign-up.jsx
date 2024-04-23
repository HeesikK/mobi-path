import styled from "styled-components";
import CustomButton from "../../components/button";
import CustomInput from "../../components/input";
import { flexCenter } from "../../style/common.style";

const SignUp = () => {
  return (
    <Wrapper>
      <CustomInput variant={"primary"} size={"large"} shape={"shape"} label={"아이디"} placeholder={"아이디를 입력해주세요"} />
      <CustomInput variant={"primary"} size={"large"} shape={"shape"} label={"비밀번호"} placeholder={"비밀번호를 입력해주세요"} />
      <CustomInput variant={"primary"} size={"large"} shape={"shape"} label={"비밀번호 확인"} placeholder={"비밀번호 확인"} />
      <CustomButton variant={"primary"} size={"large"} shape={"shape"}>
        회원가입
      </CustomButton>
    </Wrapper>
  );
};
export default SignUp;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  height: 100vh;
  & > * {
    margin-bottom: 10px;
  }
`;
