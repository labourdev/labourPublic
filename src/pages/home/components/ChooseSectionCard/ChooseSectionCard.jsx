import React from "react";
import "./ChooseSectionCard.scss";
import LazySvgImg from "../../../../components/lazySvg/LazySvgImg";

const ChooseSectionCard = ({ title, icon: Icon }) => {
  return (
    <div className="choose-section-card-container">
      <LazySvgImg SvgComponent={Icon} />
      <div>{title}</div>
    </div>
  );
};

export default ChooseSectionCard;
