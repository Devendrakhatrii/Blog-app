import { createBrowserRouter } from "react-router-dom";
// import HomePage from "@/pages/home/Home";
import LoginPage from "@/pages/auth/Login";
import SignupPage from "@/pages/auth/Signup";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/foryou",
        element: <>foryou</>,
      },
      {
        path: "/following",
        element: <>folowing</>,
      },
      {
        path: "/ai",
        element: <>AI</>,
      },
      {
        path: "/programming",
        element: <>programming</>,
      },
      {
        path: "/mernstack",
        element: <>MERN STACK</>,
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
