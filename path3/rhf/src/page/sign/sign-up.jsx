import styled from "styled-components";
import CustomButton from "../../components/button";
import CustomInput from "../../components/input";
import { flexCenter } from "../../style/common.style";
import { useForm } from "react-hook-form";
import { inputProps } from "../../consts/input-props";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Wrapper noValidate onSubmit={handleSubmit(onSubmitForm)}>
      {inputProps.map((el) => (
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
