import React from "react";
import "./JoinOurTeam.scss";

import Hero from "./sections/Hero";
import LargeCards from "./sections/LargeCards";
import Apply from "./sections/Apply";

const JoinOurTeam = () => {
  return (
    <div className="join-our-team-container">
      <Hero />
      <LargeCards />
      <Apply />
    </div>
  );
};

export default JoinOurTeam;
