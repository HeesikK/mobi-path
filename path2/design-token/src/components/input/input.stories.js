import CustomInput from "./input";

export default {
  title: "Components/CustomInput",
  component: CustomInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], //문서
  // argTypes: {
  // 	// title: { control: 'text' },
  // 	// fontSize: { control: 'number' },
  // },
};

const defaultArgs = {
  label: "input",
  placeholder: "내용을 입력해주세요",
};

export const Primary = {
  args: {
    ...defaultArgs,
    variant: "primary",
    size: "small",
    shape: "default",
    fontSize: "small",
  },
};

export const Secondary = {
  args: {
    ...defaultArgs,
    variant: "secondary",
    size: "medium",
    shape: "shape",
    fontSize: "medium",
  },
};

export const gary = {
  args: {
    ...defaultArgs,
    variant: "gray",
    size: "large",
    shape: "round",
    fontSize: "large",
  },
};
