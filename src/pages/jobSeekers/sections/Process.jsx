import React from "react";
import Stepper from "../../../components/stepper/Stepper";
import { processData } from "../data/jobSeekersData";
import Triangle from "../../../images/sketches/Triangle";

const Process = () => {
  return (
    <div className="process-section">
      <div className="page-section-padding">
        <div className="main-section-title">Application Process</div>
        <div className="text-center mt-10">
          We’ve made the application process simple and supportive to help you
          find the right job quickly
        </div>
        <div className="mt-30">
          <Stepper data={processData} />
        </div>
        <div className="text-center mt-30">
          <span className="bold">Need help?</span> Our team is here to guide you
          through every step of the process.
        </div>
      </div>
      <div className="triangles d-flex align-items-center">
        <Triangle color={"secondary"} mirror={"mirror"} />
        <Triangle color={"secondary"} />
      </div>
    </div>
  );
};

export default Process;
