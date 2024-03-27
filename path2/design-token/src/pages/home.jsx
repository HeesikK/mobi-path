import styled from "styled-components";
import CustomButton from "../components/button";

const HomePage = () => {
  return (
    <Wrapper>
      <CustomButton variant={"primary"} size={"small"} shape={"default"}>
        small
      </CustomButton>
      <CustomButton variant={"secondary"} size={"medium"} shape={"shape"}>
        medium
      </CustomButton>
      <CustomButton variant={"secondary"} size={"large"} shape={"round"}>
        large
      </CustomButton>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  & > * {
    margin: 25px;
  }
`;
