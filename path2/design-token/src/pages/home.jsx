import styled from "styled-components";
import CustomButton from "../components/button";

const HomePage = () => {
  return (
    <Wrapper>
      <CustomButton variant={"primary"} size={"medium"} shape={"shape"}>
        primary
      </CustomButton>
      <CustomButton variant={"secondary"} size={"large"} shape={"round"}>
        secondary
      </CustomButton>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  & > * {
    margin: 50px;
  }
`;
