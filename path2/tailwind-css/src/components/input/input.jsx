import { fontSizeCSS, shapeCSS, sizeCSS, variantCSS } from "./style";

const CustomInput = ({ variant, size, shape, fontSize, label, placeholder }) => {
  return (
    <div>
      <label className={`mr-4 ${fontSizeCSS[fontSize]}`}>{label}</label>
      <input className={`${variantCSS[variant]} ${sizeCSS[size]} ${shapeCSS[shape]} ${fontSizeCSS[fontSize]}`} placeholder={[placeholder]} />
    </div>
  );
};

export default CustomInput;
