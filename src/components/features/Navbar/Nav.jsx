import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.jpg";

function Nav() {
  return (
    <div className="justify-between items-center flex gap-4">
      <Link to={"/"}>
        <div className="h-20  ml-4">
          <img src={logo} className="h-[100%] object-cover " />
        </div>
      </Link>

      <input
        type="text"
        placeholder="search..."
        className="mr-2 px-1 py-1 text-sm md:mr-7 md:px-4 rounded-full focus:outline-none focus:ring focus:ring-gray-400 focus:ring-offset-2 border-2 border-gray-300 transition-all duration-300 sm:w-80 w-53"
      />
    </div>
  );
}

export default Nav;
