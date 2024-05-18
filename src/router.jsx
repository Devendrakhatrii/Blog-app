import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home/Home";
import LoginPage from "@/pages/auth/Login";
import SignupPage from "@/pages/auth/Signup";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);
