import React from "react";
import { whyUsData } from "../data/employersData";

const WhyUs = () => {
  return (
    <div className="why-with-us">
      <div className="main-section-title text-center">Why Work With Us</div>
      <div className="mt-20 text-center">
        Partnering with Labour Link Group brings a host of benefits that
        streamline your staffing process and elevate your project's success:
      </div>
      <div className="data-wrapper mt-30 d-flex align-items-center justify-content-between gap-20">
        {whyUsData.map((card, index) => (
          <div key={index} className="card">
            <img className="why-icon" src={card.icon} alt="why-icon" />
            <div className="mt-20 bold">{card.title}</div>
            <div className="desc mt-10">{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
