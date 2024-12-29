import React from "react";
import Triangle from "../../../images/sketches/Triangle";
import MainBtn from "../../../components/buttons/mainBtn/MainBtn";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="d-flex justify-content-between page-section-padding gap-20 hero-section">
        <div className="text-wrapper">
          <div className="main-section-title">
            Your Trusted Partner in Labour Hire Solutions
          </div>
          <div className="desc mt-30">
            Labour Link Group is a premier labour hire provider dedicated to the
            construction and civil industries. Founded with a mission to bridge
            the gap between companies and the skilled labour force they need, we
            leverage years of experience and deep industry knowledge to provide
            workforce solutions that are both effective and efficient. Our
            commitment to quality, safety, and compliance ensures your projects
            are in capable hands, making us your trusted partner in labour
            solutions.
          </div>
          <div className="btn mt-30">
            <MainBtn title={"Contact Us"} />
          </div>
        </div>
        <div className="flex-shrink ">
          <img
            className="hero-img"
            src="/labourPublic/images/aboutUsPage/Hero.png"
            alt="HeroImage"
          />
        </div>
      </div>
      <div className="triangles d-flex align-items-center">
        <Triangle color={"primary"} mirror={"mirror"} />
        <Triangle color={"primary"} />
      </div>
    </div>
  );
};

export default Hero;
