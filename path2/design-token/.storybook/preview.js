import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/global.style";
import theme from "../src/styles/theme.style";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

/* 
  스토리북에 ThemeProvider 적용하는 방법
  스토리북의 preview.js 설정 파일에서 decorator로 감싸주며 styled-components 요소를 적용하면 된다.
*/
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
