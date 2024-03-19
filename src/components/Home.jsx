import React from "react";
import "./components.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to NotesLelo!</h1>
      <p style={{ padding: "0px 15px" }}>
        Welcome to NotesLelo. In this website, you can get notes. Its just like heaven for students who are very lazy or were absent some days. You can click the <b>Choose a subject</b> button below to get the list of subjects. You can choose a subject and the chapter of which you want to get the notes. There are some exceptions in English, Hindi, And Social Science, in which you have to first select the part (Literature and Language in the case of English and Hindi, and History, Civics and Geography in the case of Social Science) and then select the chapter to get the notes.
      </p>
      <p><i>This is a beta version which means its just for testing purpose. You can not select any chapter because chapters will be inserted when I'll get the books. And then the beta version will be closed and the final version will be opened for everyone.</i></p>
      <p style={{ padding: "0px 15px" }}>
        <b>Note:-</b> You will not get notes of General Knowledge and
        Mathematics because answers are given on the back of the book of General
        Knowledge and Mathematics, you should do it yourself.
      </p>
      <NavLink to="/subjects" className="chooseasubject">
        Choose a subject =={">"}
      </NavLink>
    </div>
  );
};

export default Home;
