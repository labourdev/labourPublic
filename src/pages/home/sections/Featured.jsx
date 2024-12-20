import React from "react";
import { featuredJobsData } from "../data/homeData";
import JobCard from "../../../components/jobCard/JobCard";

const Featured = () => {
  return (
    <div className="featured-sections-section">
      <div className="texts d-flex align-items-center justify-content-center flex-column">
        <div className="main-section-title ">Featured Jobs</div>
        <div className="desc text-center">
          Discover the best job opportunities tailored to your career goals
        </div>
      </div>
      <div className="featured-jobs-sket">
        <img
          src="/labourPublic/images/FeaturedJobs.png"
          alt="ItWorks"
          loading="lazy"
        />
      </div>
      <div className="sections-wrapper">
        {featuredJobsData?.map((card, index) => (
          <div key={index}>
            <JobCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
