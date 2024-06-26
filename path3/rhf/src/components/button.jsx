import styled, { css } from "styled-components";
import { flexCenter } from "../style/common.style";

const CustomButton = ({ variant, size, shape, children, ...rest }) => {
  return (
    <Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;

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

  error: css`
    background-color: ${({ theme }) => theme.COLORS.error};
  `,
};

const sizeCSS = {
  small: css`
    width: 48px;
    height: 24px;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
  `,
  medium: css`
    width: 72px;
    height: 36px;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  `,
  large: css`
    width: 400px;
    height: 50px;
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
  font-size: 18px;
`;
