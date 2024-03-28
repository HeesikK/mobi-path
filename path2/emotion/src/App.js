import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
