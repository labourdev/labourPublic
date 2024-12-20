import React from "react";
import { adviceData } from "../data/jobSeekersData";

const CareerAdvice = () => {
  return (
    <div className="career-advice-section page-section-padding">
      <div className="main-section-title">Career Advice</div>
      <div className="desc text-center mt-10">
        We’re here to help you succeed not just in finding a job, but in
        building a career. Explore our resources to get ahead:
      </div>
      <div className="cards d-flex align-items-center justify-content-between">
        {adviceData.map((card, index) => (
          <div className="card d-flex gap-20" key={index}>
            <img
              src="/labourPublic/images/jobSeekersPage/adviceIcon.png"
              alt="careerAdviceIcon"
              loading="lazy"
            />
            <div>
              <div className="bold">{card.title}</div>
              <div className="mt-10">{card.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerAdvice;
