import React from "react";
import "./AboutUs.scss";

import GetInTouch from "../../components/getInTouch/GetInTouch";
import Hero from "./sections/Hero";
import LazySection from "../../components/lazySection/LazySection";
const Vision = React.lazy(() => import("./sections/Vision"));
const Values = React.lazy(() => import("./sections/Values"));
const WhyUs = React.lazy(() => import("./sections/WhyUs"));
const Meet = React.lazy(() => import("./sections/Meet"));

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Hero />
      <LazySection Section={Vision} />
      <LazySection Section={Values} />
      <LazySection Section={WhyUs} />
      <LazySection Section={Meet} />
      <GetInTouch />
    </div>
  );
};

export default AboutUs;
