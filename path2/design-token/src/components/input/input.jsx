import { S } from "./style";

const CustomInput = ({ variant, size, shape, fontSize, label, placeholder, ...inputProps }) => {
  return (
    <S.Wrapper>
      <S.Label fontSize={fontSize}>{label}</S.Label>
      <S.Input variant={variant} size={size} shape={shape} fontSize={fontSize} placeholder={placeholder} {...inputProps} />
    </S.Wrapper>
  );
};

export default CustomInput;
