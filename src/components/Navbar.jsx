import React from "react";
import { NavLink } from "react-router-dom";
import "./components.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/subjects">Subjects</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
