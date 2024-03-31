/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import CustomButton from "../components/button/button";

const HomePage = () => {
  const SomeText = styled.div`
    color: ${(props) => props.theme.COLORS.primary.yellow};
  `;
  return (
    <>
      <CustomButton variant={"primary"} size={"small"} shape={"default"}>
        small
      </CustomButton>
      <SomeText>primary 색깔로 변경된것을 확인할 수 잇음</SomeText>
    </>
  );
};

export default HomePage;
