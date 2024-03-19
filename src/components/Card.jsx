import React from "react";
import "./card.css";
import { NavLink } from "react-router-dom";

const Card = ({ sname, sdescription, sbutton, slink }) => {
  return (
    <div
      className="card"
      style={{ width: "20rem", height: "fit-content", paddingBottom: "15px" }}
    >
      <div className="card-body">
        <h2 className="card-title">{sname}</h2>
        <p className="card-text">{sdescription}</p>
        <NavLink
          to={slink}
          className="chooseasubject"
          style={{ textDecoration: "none" }}
        >
          {sbutton}
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
