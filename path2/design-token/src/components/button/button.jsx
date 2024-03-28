import PropTypes from "prop-types";
import { S } from "./style";

const CustomButton = ({ variant, size, shape, children, ...rest }) => {
  return (
    <S.Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </S.Button>
  );
};

export default CustomButton;

// customButton의 기본 props값을 defaultProps로 설정
CustomButton.defaultProps = {
  variant: "primary",
  size: "medium",
  shape: "shape",
  children: "button",
};

//해당 컴포넌트에 필요한 props를 정리해놓은 것
//스토리북의 오른쪽 선택 탭
CustomButton.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "error"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  shape: PropTypes.oneOf(["default", "shape", "round"]),
  children: PropTypes.string,
};
