import React from "react";
import { NavLink } from "react-router-dom";

const ChaptersHindiI = () => {
  return <div>
    <ul className="chapters">
      <li><NavLink to="chapter1">पाठ 1: </NavLink></li>
      <li><NavLink to="chapter2">पाठ 2: </NavLink></li>
      <li><NavLink to="chapter3">पाठ 3: </NavLink></li>
      <li><NavLink to="chapter4">पाठ 4: </NavLink></li>
      <li><NavLink to="chapter5">पाठ 5: </NavLink></li>
      <li><NavLink to="chapter6">पाठ 6: </NavLink></li>
      <li><NavLink to="chapter7">पाठ 7: </NavLink></li>
      <li><NavLink to="chapter8">पाठ 8: </NavLink></li>
      <li><NavLink to="chapter9">पाठ 9: </NavLink></li>
      <li><NavLink to="chapter10">पाठ 10: </NavLink></li>
    </ul>
  </div>;
};

export default ChaptersHindiI;
