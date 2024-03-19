import React from "react";
import { NavLink } from "react-router-dom";

const ChaptersHistory = () => {
  return <div>
    <ul className="chapters">
      <li><NavLink to="chaper1">Chapter 1: </NavLink></li>
      <li><NavLink to="chaper2">Chapter 2: </NavLink></li>
      <li><NavLink to="chaper3">Chapter 3: </NavLink></li>
      <li><NavLink to="chaper4">Chapter 4: </NavLink></li>
      <li><NavLink to="chaper5">Chapter 5: </NavLink></li>
      <li><NavLink to="chaper6">Chapter 6: </NavLink></li>
      <li><NavLink to="chaper7">Chapter 7: </NavLink></li>
      <li><NavLink to="chaper8">Chapter 8: </NavLink></li>
      <li><NavLink to="chaper9">Chapter 9: </NavLink></li>
      <li><NavLink to="chaper10">Chapter 10: </NavLink></li>
    </ul>
  </div>;
};

export default ChaptersHistory;
