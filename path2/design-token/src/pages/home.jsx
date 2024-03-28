import styled from "styled-components";
import CustomButton from "../components/button/button";
import CustomInput from "../components/input/input";

const HomePage = () => {
  return (
    <Wrapper>
      <CustomButton variant={"primary"} size={"small"} shape={"default"}>
        small
      </CustomButton>
      <CustomButton variant={"secondary"} size={"medium"} shape={"shape"}>
        medium
      </CustomButton>
      <CustomButton variant={"error"} size={"large"} shape={"round"}>
        large
      </CustomButton>
      <CustomInput variant={"primary"} size={"small"} shape={"default"} fontSize={"small"} label={"small"} placeholder={"내용을 입력해주세요"} />
      <CustomInput variant={"secondary"} size={"medium"} shape={"shape"} fontSize={"medium"} label={"medium"} placeholder={"내용을 입력해주세요"} />
      <CustomInput variant={"gray"} size={"large"} shape={"round"} label={"large"} fontSize={"large"} placeholder={"내용을 입력해주세요"} />
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  & > * {
    margin: 25px;
  }
`;
