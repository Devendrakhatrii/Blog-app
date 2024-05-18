import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "@/pages/Dashboard";
import { HomePage } from "@/pages/Home";
import { LoginPage } from "@/pages/Login";
import { SignupPage } from "@/pages/Signup";
import { NavigationPage } from "@/pages/Navigation";
import Navbar from "./components/header/Navbar";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <>Home</> },

      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/navbar",
        element: <Navbar />,
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
