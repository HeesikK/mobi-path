import styled from "styled-components";
import { flexCenter } from "../../style/common.style";
import CustomInput from "../../components/input";
import CustomButton from "../../components/button";
import { useForm } from "react-hook-form";
import { schema } from "../../utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInInputProps } from "../../consts/input-props";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onSubmitForm = () => {
    navigate("/");
  };

  return (
    <Wrapper noValidate onSubmit={handleSubmit(onSubmitForm)}>
      {signInInputProps.map((el) => (
        <CustomInput type={el.type} name={el.name} label={el.label} placeholder={el.placeholder} variant={el.variant} size={el.size} shape={el.shape} register={register} errors={errors} />
      ))}
      <CustomButton disabled={!isValid} variant={"primary"} size={"large"} shape={"shape"}>
        로그인
      </CustomButton>
    </Wrapper>
  );
};
export default SignIn;

const Wrapper = styled.form`
  ${flexCenter}
  flex-direction: column;
  height: 100vh;
  & > * {
    margin-bottom: 10px;
  }
`;
