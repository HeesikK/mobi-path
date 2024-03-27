import styled, { css } from "styled-components";

const CustomButton = ({ variant, size, shape, children }) => {
  console.log(variant);
  return (
    <Button variant={variant} size={size} shape={shape}>
      {children}
    </Button>
  );
};

export default CustomButton;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary["yellow"]};
  `,
};

const sizeCSS = {
  small: css`
    width: 48px;
    height: 24px;
  `,
  medium: css`
    width: 72px;
    height: 36px;
  `,
  large: css`
    width: 96px;
    height: 48px;
  `,
};

const shapeCSS = {
  default: css`
    border-radius: 0;
  `,
  shape: css`
    border-radius: 8px;
  `,
  large: css`
    border-radius: 24px;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
`;
