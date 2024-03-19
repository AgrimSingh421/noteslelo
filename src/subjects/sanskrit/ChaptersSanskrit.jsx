import React from "react";
import { NavLink } from "react-router-dom";

const ChaptersSanskrit = () => {
  return <div>
    <ul className="chapters">
      <li><NavLink to="chapter10">पाठ 10: महाराणा प्रताप</NavLink></li>
      <li><NavLink to="chapter11">पाठ 11: भोजनम् शरीर-रक्षकम्</NavLink></li>
      <li><NavLink to="chapter12">पाठ 12: त्रयोः धूर्त्ताः</NavLink></li>
      <li><NavLink to="chapter13">पाठ 13: विद्या राजसु पूजिता</NavLink></li>
      <li><NavLink to="chapter14">पाठ 14: श्लोकस्तबकम्</NavLink></li>
      <li><NavLink to="chapter15">पाठ 15: भगवान बुद्ध</NavLink></li>
      <li><NavLink to="chapter16">पाठ 16: सर्वोत्तमः वरः</NavLink></li>
    </ul>
  </div>;
};

export default ChaptersSanskrit;
