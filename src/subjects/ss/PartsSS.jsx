import React from "react";
import Card from "../../components/Card";
import "../../App.css";

const PartsSS = () => {
  return (
    <div className="parts">
      <Card
        sname="History"
        sdescription={`Click on "Choose Chapter" to choose a chapter of History.`}
        sbutton="Choose Chapter"
        slink="/subjects/ss/history/chapters"
      />
      <Card
        sname="Civics"
        sdescription={`Click on "Choose Chapter" to choose a chapter of Civics.`}
        sbutton="Choose Chapter"
        slink="/subjects/ss/civics/chapters"
      />
      <Card
        sname="Geography"
        sdescription={`Click on "Choose Chapter" to choose a chapter of Geography.`}
        sbutton="Choose Chapter"
        slink="/subjects/ss/geography/chapters"
      />
    </div>
  );
};

export default PartsSS;
