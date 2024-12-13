import React from "react";
import { howItWorksData } from "../data/servicesData";
import Triangle from "../../../images/sketches/Triangle";

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <div className="triangles d-flex align-items-center">
        <Triangle color={"white"} mirror={"mirror"} />
        <Triangle color={"white"} />
      </div>
      <div className="page-section-padding">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="main-section-title">How It Works</div>
          <div className="text-center mt-10">
            Learn more about how we work and how we can help you achieve your
            goals.
          </div>
        </div>
        <div className="mt-50">
          <div className="horizontal-line"></div>
          <div className="sections-wrapper d-flex justify-content-between gap-20">
            {howItWorksData?.map((card, index) => (
              <div key={index}>
                <div className={`step ${card.color}`}>0{index + 1}</div>
                <div className="title">{card.title}</div>
                <div>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
