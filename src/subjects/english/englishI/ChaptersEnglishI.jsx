import React from "react";
import { NavLink } from "react-router-dom";

const ChaptersEnglish = () => {
  return (
    <div>
      <ul className="chapters">
        <li>
          <NavLink to="chapter1">Chapter 1: </NavLink>
        </li>
        <li>
          <NavLink to="chapter2">Chapter 2: </NavLink>
        </li>
        <li>
          <NavLink to="chapter3">Chapter 3: </NavLink>
        </li>
        <li>
          <NavLink to="chapter4">Chapter 4: </NavLink>
        </li>
        <li>
          <NavLink to="chapter5">Chapter 5: </NavLink>
        </li>
        <li>
          <NavLink to="chapter6">Chapter 6: </NavLink>
        </li>
        <li>
          <NavLink to="chapter7">Chapter 7: </NavLink>
        </li>
        <li>
          <NavLink to="chapter8">Chapter 8: </NavLink>
        </li>
        <li>
          <NavLink to="chapter9">Chapter 9: </NavLink>
        </li>
        <li>
          <NavLink to="chapter10">Chapter 10: </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ChaptersEnglish;
