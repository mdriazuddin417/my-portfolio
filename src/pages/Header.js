import photo from "../image/photo3.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  const menu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/project">All Project</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-accent sticky top-0 z-50 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {menu}
          </ul>
        </div>
        <div className=" normal-case text-xl hidden lg:block">
          <img
            src={photo}
            alt=""
            className="rounded-full w-[65px] h-[65px] ring-2 ring-[#FF451B] ring-offset-2"
          />
        </div>
      </div>
      <div className="navbar-end  lg:flex lg:hidden">
        <img
          src={photo}
          alt=""
          className="rounded-full w-[65px] h-[65px] ring-2 ring-[#FF451B] ring-offset-2"
        />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 space-x-2">{menu}</ul>
      </div>
    </div>
  );
};

export default Header;
