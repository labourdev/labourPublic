import React from "react";

const Vision = () => {
  return (
    <div className="page-section-padding d-flex justify-content-center align-items-center vision-mession-section">
      <div className="image-wrapper">
        <img
          className="hero-img"
          src="/labourPublic/images/aboutUsPage/vision.png"
          alt="HeroImage"
        />
      </div>
      <div className="left-section">
        <div className="main-section-title">Our Vision</div>
        <div>
          To be the leading provider of skilled labour in the construction and
          civil industries, known for our unwavering commitment to quality,
          safety, and client satisfaction.
        </div>
        <div className="main-section-title mt-30">Our Mission</div>
        <div>
          To elevate the standards of labour hire by connecting Sydney's top
          talent with projects that matter. Through rigorous compliance,
          unmatched safety standards, and a commitment to workforce excellence,
          we ensure that every project we support is a success.
        </div>
      </div>
    </div>
  );
};

export default Vision;
