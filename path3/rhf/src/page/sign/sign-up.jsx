import styled from "styled-components";
import CustomButton from "../../components/button";
import CustomInput from "../../components/input";
import { flexCenter } from "../../style/common.style";
import { useForm } from "react-hook-form";
import { signUpInputProps } from "../../consts/input-props";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmitForm = (data) => {
    alert(` ${JSON.stringify(data.nickname)}님 반갑습니다☺️`);
    navigate("/sign-in");
  };

  return (
    <Wrapper noValidate onSubmit={handleSubmit(onSubmitForm)}>
      {signUpInputProps.map((el) => (
        <CustomInput type={el.type} name={el.name} label={el.label} placeholder={el.placeholder} variant={el.variant} size={el.size} shape={el.shape} register={register} errors={errors} />
      ))}
      <CustomButton variant={"primary"} size={"large"} shape={"shape"}>
        회원가입
      </CustomButton>
    </Wrapper>
  );
};
export default SignUp;

const Wrapper = styled.form`
  ${flexCenter}
  flex-direction: column;
  height: 100vh;
  & > * {
    margin-bottom: 10px;
  }
`;
