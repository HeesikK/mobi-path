import CustomButton from "./button";

export default {
  title: "Components/CustomButton",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], //문서
  // argTypes: {
  // 	// title: { control: 'text' },
  // 	// fontSize: { control: 'number' },
  // },
};

// defaultArgs로 기본값을 설정
const defaultArgs = {
  children: "Button",
};

export const Primary = {
  args: {
    ...defaultArgs,
    variant: "primary",
    size: "small",
    shape: "default",
  },
};

export const Secondary = {
  args: {
    ...defaultArgs,
    variant: "secondary",
    size: "medium",
    shape: "shape",
  },
};

export const Error = {
  args: {
    ...defaultArgs,
    variant: "error",
    size: "large",
    shape: "round",
  },
};
