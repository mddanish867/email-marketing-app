import Navbar from "../Home/Navbar";
import { Outlet } from "react-router-dom";  // Import Outlet from react-router-dom

const Layout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <div className="">
        <Outlet />  {/* Use Outlet to render the matched child routes */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
