import PropTypes from "prop-types";
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

CustomInput.defaultProps = {
  label: "input",
  placeholder: "내용을 입력해주세요.",
  variant: "primary",
  size: "small",
  shape: "default",
  fontSize: "small",
};

CustomInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "gray"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  shape: PropTypes.oneOf(["default", "shape", "round"]),
  fontSize: PropTypes.oneOf(["small", "medium", "large"]),
};
