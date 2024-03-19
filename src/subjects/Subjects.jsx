import React from "react";
import Card from "../components/Card";
import "../App.css";

const Subjects = () => {
  return (
    <div className="subjects">
      <Card
        sname="English"
        sdescription={`Click on "Choose Part" to choose a part of English.`}
        sbutton="Choose Part"
        slink="/subjects/english/parts"
      />
      <Card
        sname="Computer"
        sdescription={`Click on "Choose Chapter" to choose a chapter of Computer.`}
        sbutton="Choose Chapter"
        slink="/subjects/computer/chapters"
      />
      <Card
        sname="Science"
        sdescription={`Click on "Choose Chapter" to choose a chapter of Science.`}
        sbutton="Choose Chapter"
        slink="/subjects/science/chapters"
      />
      <Card
        sname="Social Science"
        sdescription={`Click on "Choose Part" to choose a part of Social Science.`}
        sbutton="Choose Part"
        slink="/subjects/ss/parts"
      />
      {/* <Card
        sname="Sanskrit"
        sdescription={`Click on "Choose Chapter" to choose a chapter of Sanskrit.`}
        sbutton="Choose Chapter"
        slink="/subjects/sanskrit/chapters"
      /> */}
      <Card
        sname="Hindi"
        sdescription={`Click on "Choose Part" to choose a part of Hindi.`}
        sbutton="Choose Part"
        slink="/subjects/hindi/parts"
      />
    </div>
  );
};

export default Subjects;
