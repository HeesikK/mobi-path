/** @jsxImportSource @emotion/react */
import { S } from "./style";

const CustomButton = ({ variant, size, shape, children, ...rest }) => {
  console.log(variant, size, shape);
  return (
    <S.Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </S.Button>
  );
};

export default CustomButton;
