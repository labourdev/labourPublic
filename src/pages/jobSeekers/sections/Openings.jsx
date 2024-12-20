import React from "react";
import { jobOpeningsData } from "../data/jobSeekersData";
import JobCard from "../../../components/jobCard/JobCard";

const Openings = () => {
  return (
    <div className="job-opening-section page-section-padding">
      <div className="main-section-title">Current Job Openings</div>
      <div className="text-center mt-10">
        Explore our current job openings below. Use the filters to find jobs
        that match your skills and location
      </div>
      <div className="job-openings-wrapper mt-30 d-flex gap-30">
        {jobOpeningsData?.map((card, index) => (
          <div key={index}>
            <JobCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Openings;
