import Navbar from "./components/header/Navbar";
import { Outlet } from "react-router-dom";
import FeedPage from "./pages/feed/Feed";

const Layout = () => {
  return (
    <>
      <Navbar />
      <FeedPage />
      <Outlet />
    </>
  );
};

export default Layout;
