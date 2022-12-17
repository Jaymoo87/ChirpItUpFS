import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="nav d=flex justify-content-around bg-primary p-3 text-primary">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-link ${
            isActive ? "active btn btn-info text-light btn-outline-primary" : "btn btn-info text-light"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/newchirp"
        className={({ isActive }) =>
          `nav-link ${
            isActive ? "active btn btn-info text-light btn-outline-primary" : "btn btn-info text-light"
          }`
        }
      >
        New Chirp
      </NavLink>
      </nav>
  )};

  export default Navbar;