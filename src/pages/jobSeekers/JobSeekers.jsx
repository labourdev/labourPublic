import React from "react";
import "./JobSeekers.scss";

import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import Openings from "./sections/Openings";
import Process from "./sections/Process";
import EmployeeBenefits from "./sections/EmployeeBenefits";
import CareerAdvice from "./sections/CareerAdvice";
import TeamExperience from "./sections/TeamExperience";
import MainBtn from "../../components/buttons/mainBtn/MainBtn";

const JobSeekers = () => {
  return (
    <div className="job-seekers-container">
      <Hero />
      <Benefits />
      <Openings />
      <Process />
      <EmployeeBenefits />
      <CareerAdvice />
      <TeamExperience />
      <div className="bottom-banner page-section-padding d-flex align-items-center flex-column gap-25">
        <div className="main-section-title">
          Ready to take the next step in your career? Explore our job listings
          and apply today!
        </div>
        <MainBtn title={"Find Your Next Job"} />
      </div>
    </div>
  );
};

export default JobSeekers;
