import React from "react";
import Stepper from "../../../components/stepper/Stepper";
import { howItWorksData } from "../data/employersData";

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="main-section-title">Our Hiring Process</div>
        <div className="text-center mt-10">
          We pride ourselves on a meticulous hiring process that matches the
          right workers with the right employers:
        </div>
      </div>
      <div className="mt-50">
        <Stepper data={howItWorksData} />
      </div>
    </div>
  );
};

export default HowItWorks;
