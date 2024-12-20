import React from "react";

const Hero = () => {
  return (
    <div className="hero-section d-flex justify-content-between page-section-padding">
      <div className="texts">
        <div className="main-section-title bolder">Join Our Workforce</div>
        <div>
          At Labour Link Group, we are committed to helping skilled workers and
          tradies find the right opportunities in the construction and civil
          industries. Whether you're looking for a temporary job or a long-term
          position, we have the connections to get you where you want to be.
          Join our network and become part of a company that values hard work,
          expertise, and a commitment to excellence.
        </div>
      </div>
      <img
        src="/labourPublic/images/jobSeekersPage/Hero.png"
        alt="HeroImage"
        loading="lazy"
      />
    </div>
  );
};

export default Hero;
