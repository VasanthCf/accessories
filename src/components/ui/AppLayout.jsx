import { Outlet } from "react-router-dom";
import Nav from "../features/Navbar/Nav";

function AppLayout() {
  return (
    <div>
      <Nav />
      <main className="rounded-md w-[98%] m-auto bg-slate-200 h-auto p-4 pb-14 mb-8">
        <Outlet />
      </main>
      <div className="bg-red-400 py-2 text-center  text-slate-50">
        <p>
          {" "}
          This website is Simple E-Commerce website to learn React Router to
          manage remote state.
        </p>
        <p className="text-xl">vasanthCf 2023</p>
      </div>
    </div>
  );
}

export default AppLayout;
