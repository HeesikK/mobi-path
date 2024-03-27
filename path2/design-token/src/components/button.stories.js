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

const defaultArgs = {
  children: "Button",
};

export const Primary = {
  args: {
    ...defaultArgs,
    primary: true,
    size: "small",
  },
};

export const Secondary = {
  args: {
    ...defaultArgs,
    primary: false,
    size: "small",
  },
};
