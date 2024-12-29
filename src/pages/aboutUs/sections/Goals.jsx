import React from "react";
import Triangle from "../../../images/sketches/Triangle";
import Goals from "../../images/icons/AboutUs/Goals";

const Goals = () => {
  return (
    <div className="vision-goals-section">
      <div className="vision-triangles d-flex align-items-center">
        <Triangle color={"white"} mirror={"mirror"} />
        <Triangle color={"white"} />
      </div>
      <div className="wrapper page-section-padding d-flex align-items-center gap-30">
        <Goals />
        <div className="separator"></div>
        <div className="content">
          <div className="main-section-title">Vision & Goals</div>
          <div className="mt-10">
            Our vision is to be the leading provider of skilled labour in
            Sydney, recognized for our dedication to quality, safety, and client
            satisfaction. We strive to continuously improve our processes and
            expand our services to better meet the evolving needs of the
            construction, residential, and civil industries. By building
            stronger client relationships and adapting to industry changes, we
            aim to remain at the forefront of labour hire solutions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
