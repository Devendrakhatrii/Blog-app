import Navbar from "./components/header/Navbar";
import { Outlet } from "react-router-dom";
import FeedPage from "./pages/feed/Feed";
import Post from "./components/post/Post";

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
