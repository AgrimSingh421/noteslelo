import React from "react";
import Card from "../../components/Card";
import "../../App.css";

const PartsEnglish = () => {
  return (
    <div className="parts">
      <Card
        sname="English Literature"
        sdescription={`Click on "Choose Chapter" to choose a chapter of English Literature.`}
        sbutton="Choose Chapter"
        slink="/subjects/english/englishI/chapters"
      />
      <Card
        sname="English Grammar"
        sdescription={`Click on "Choose Chapter" to choose a chapter of English Grammar.`}
        sbutton="Choose Chapter"
        slink="/subjects/english/englishII/chapters"
      />
    </div>
  );
};

export default PartsEnglish;
