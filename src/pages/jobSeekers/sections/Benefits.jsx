import React from "react";
import { benefitsData } from "../data/jobSeekersData";
import MainBtn from "../../../components/buttons/mainBtn/MainBtn";

const Benefits = () => {
  return (
    <div className="benefits-section page-section-padding">
      <div className="main-section-title">The Benefits of Working With Us</div>
      <div className="cards d-flex align-items-center justify-content-between gap-15">
        {benefitsData?.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.icon} alt="service" loading="lazy" />
            <div className="title">{card.title}</div>
            <div>{card.desc}</div>
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <MainBtn title={"Find Your Next Job"} />
      </div>
    </div>
  );
};

export default Benefits;
