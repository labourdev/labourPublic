import React from "react";
import { caseStudies } from "../data/employersData";
import MainBtn from "../../../components/buttons/mainBtn/MainBtn";

const Cases = () => {
  return (
    <div className="case-studies page-section-padding">
      <div className="main-section-title text-center">Case Studies</div>
      <div className="mt-20 text-center">
        Explore in-depth examples of how Labour Link Group has successfully
        partnered with other companies to deliver exceptional results. Each case
        study showcases:
      </div>
      <div className="data-wrapper mt-20 d-flex align-items-center justify-content-between gap-25">
        {caseStudies.map((card, index) => (
          <div key={index} className="card">
            <img className="pic" src={card.icon} alt="pic" />
            <div className="bold title">{card.title}</div>
            <div className="mt-10">{card.desc}</div>
            <div className="btn mt-30">
              <MainBtn title={"Continue Reading"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cases;
