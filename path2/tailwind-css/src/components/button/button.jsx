import { shapeCSS, sizeCSS, variantCSS } from "./style";

const CustomButton = ({ variant, size, shape, children, ...rest }) => {
  return (
    <button className={`${variantCSS[variant]} ${sizeCSS[size]} ${shapeCSS[shape]} flex justify-center items-center font-bold`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
