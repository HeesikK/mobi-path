import styled, { css } from "styled-components";
import { flexAlignCenter } from "../../styles/common.style";

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary["beige"]};
  `,

  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.secondary["mint"]};
  `,

  gray: css`
    background-color: ${({ theme }) => theme.COLORS.gray[200]};
  `,
};

const sizeCSS = {
  small: css`
    width: 160px;
    height: 40px;
    padding: 8px;
  `,
  medium: css`
    width: 240px;
    height: 45px;
    padding: 10px;
  `,
  large: css`
    width: 320px;
    height: 80px;
    padding: 12px;
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
    border-radius: 32px;
  `,
};

const fontSizeCSS = {
  small: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
  `,

  medium: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  `,

  large: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
  `,
};

const Input = styled.input`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ fontSize }) => fontSizeCSS[fontSize]}
  border: 1px solid black;
`;

const Label = styled.label`
  ${({ fontSize }) => fontSizeCSS[fontSize]}
`;

const Wrapper = styled.div`
  ${flexAlignCenter}
  & > * {
    margin: 10px;
  }
`;

export const S = {
  Input,
  Label,
  Wrapper,
};
