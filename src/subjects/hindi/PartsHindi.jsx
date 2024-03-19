import React from "react";
import Card from "../../components/Card";
import "../../App.css";

const PartsHindi = () => {
  return (
    <div className="parts">
      <Card
        sname="Hindi Literature"
        sdescription={`Click on "Choose Chapter" to choose a chapter of Hindi Literature.`}
        sbutton="Choose Chapter"
        slink="/subjects/hindi/hindiI/chapters"
      />
      <Card
        sname="Hindi Grammar"
        sdescription={`Click on "Choose Chapter" to choose a chapter of Hindi Grammar.`}
        sbutton="Choose Chapter"
        slink="/subjects/hindi/hindiII/chapters"
      />
    </div>
  );
};

export default PartsHindi;
