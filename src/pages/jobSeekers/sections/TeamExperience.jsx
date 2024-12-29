import React from "react";
import Testimonial from "../../../components/testimonial/Testimonial";
import { testimonialsData } from "../../home/data/homeData";

const TeamExperience = () => {
  return (
    <div className="team-experience-section page-section-padding">
      <div className="main-section-title">Team Member Experiences</div>
      <div className="desc text-center mt-10">
        Hear from our team members about their experiences working with Labour
        Link Group.
      </div>
      <div className="mt-30 d-flex gap-20 cards">
        {testimonialsData?.map((card, index) => (
          <div key={index} className="card">
            <Testimonial card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamExperience;
