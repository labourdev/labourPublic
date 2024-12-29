import React from "react";
import { values } from "../data/aboutUsData";

const Values = () => {
  return (
    <div className="page-section-padding our-values-section">
      <div className="main-section-title">Our Values</div>
      <div className="cards-wrapper d-flex align-items-center mt-30 gap-20">
        {values.map((value, index) => (
          <div key={index} className={`card ${value.color}`}>
            <value.icon />
            <div className="mt-20 title bold">{value.title}</div>
            <div className="mt-10">{value.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
