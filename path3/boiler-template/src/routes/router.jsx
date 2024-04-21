import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import LoginPage from "../pages/login/loginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
