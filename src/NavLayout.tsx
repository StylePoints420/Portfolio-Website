import { Outlet } from "react-router";
import Navbar from "./Navbar";

const NavLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full " id="home">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default NavLayout;
