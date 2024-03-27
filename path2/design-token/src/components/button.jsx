import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { flexCenter } from "../styles/common.style";

const CustomButton = ({ variant, size, shape, children, ...rest }) => {
  return (
    <Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </Button>
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
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  shape: PropTypes.oneOf(["default", "shape", "round"]),
  children: PropTypes.string,
};

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary["yellow"]};
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.primary["beige"]};
    }
  `,

  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.secondary["purple"]};
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.secondary["pink"]};
    }
  `,
};

const sizeCSS = {
  small: css`
    width: 48px;
    height: 24px;
    padding: 12px 36px;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
  `,
  medium: css`
    width: 72px;
    height: 36px;
    padding: 24px 72px;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  `,
  large: css`
    width: 96px;
    height: 48px;
    padding: 48px 144px;
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
  `,
};

const shapeCSS = {
  default: css`
    border-radius: 0;
  `,
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 50px;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  ${flexCenter}
`;
