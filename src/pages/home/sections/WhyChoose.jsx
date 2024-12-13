import React from "react";
import ChooseSectionCard from "../components/ChooseSectionCard/ChooseSectionCard";
import { cardsData } from "../data/homeData";

const WhyChoose = () => {
  return (
    <div className="why-choose-section">
      <div className="texts d-flex align-items-center justify-content-center flex-column">
        <div className="main-section-title bolder text-center">
          Why Choose Labour Link Group?
        </div>
        <div className="desc text-center">
          At Labour Link Group, we understand that the success of your project
          depends on having the right people, in the right place, at the right
          time. That’s why we’re committed to delivering not just labour, but a
          fully integrated staffing solution that adapts to your project’s
          demands, minimizes downtime, and maximizes efficiency.
        </div>
      </div>
      <div className="cards d-flex align-items-center">
        {cardsData?.map((card, index) => (
          <ChooseSectionCard key={index} title={card.title} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
