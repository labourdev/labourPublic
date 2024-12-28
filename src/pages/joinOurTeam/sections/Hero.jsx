import React from "react";

const Hero = () => {
  return (
    <div className="hero-section d-flex justify-content-between page-section-padding">
      <div className="texts">
        <div className="main-section-title bolder">Join Our Team</div>
        <div>
          At Labour Link Group, we’re always looking for talented professionals
          who are ready to make an impact. Whether you’re an experienced
          recruitment consultant, a leader in business operations, or an intern
          eager to learn, we have exciting opportunities for you. Join us and
          contribute to our mission of providing top talent across key
          industries, from blue-collar to white-collar roles.
        </div>
      </div>
      <img
        src="/labourPublic/images/joinOurTeamPage/Hero.png"
        alt="HeroImage"
        loading="lazy"
      />
    </div>
  );
};

export default Hero;
