import React from "react";
import { team } from "../data/aboutUsData";

const Meet = () => {
  return (
    <div className="page-section-padding meet-team-section">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="main-section-title">Meet Our Team</div>
        <div className="sub-title text-center mt-30">
          At Labour Link Group, we believe that our team is our greatest asset.
          Meet our leadership team, who bring a wealth of experience and
          dedication to every project.
        </div>
      </div>
      <div className="members d-flex align-items-center justify-content-between mt-30 gap-25">
        {team.map((member, index) => (
          <div
            key={index}
            className="card d-flex flex-column align-items-center"
          >
            <member.icon />
            <div className="name mt-10 bold">{member.name}</div>
            <div>{member.job}</div>
            <div className="separator mt-10"></div>
            <div className="desc mt-10 text-center">{member.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meet;
