import React from "react";
import "./ChooseSectionCard.scss";

const ChooseSectionCard = ({ title, icon: Icon }) => {
  return (
    <div className="choose-section-card-container">
      <Icon />
      <div>{title}</div>
    </div>
  );
};

export default ChooseSectionCard;
