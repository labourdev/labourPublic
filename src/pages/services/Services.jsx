import "./Services.scss";
import React from "react";

import Triangle from "../../images/sketches/Triangle";
import Hero from "./sections/Hero";
import LazySection from "../../components/lazySection/LazySection";

const LazyServicesCards = React.lazy(() => import("./sections/ServicesCards"));
const LazyWhyChoose = React.lazy(() => import("./sections/WhyChoose"));
const LazyHowItWorks = React.lazy(() => import("./sections/HowItWorks"));
const LazyIndustryExpertise = React.lazy(() =>
  import("./sections/IndustryExpertise")
);
const LazyGetInTouch = React.lazy(() =>
  import("../../components/getInTouch/GetInTouch")
);

const Services = () => {
  return (
    <div className="services-container">
      <Hero />
      <div className="d-flex align-items-center trainagles-separator">
        <div className="d-flex triangles-wrapper">
          <Triangle color={"gray"} mirror={"mirror"} />
          <Triangle color={"gray"} />
        </div>
        <div className="left-section"></div>
      </div>
      <LazySection Section={LazyServicesCards} />
      <LazySection Section={LazyIndustryExpertise} />
      <LazySection Section={LazyWhyChoose} />
      <LazySection Section={LazyHowItWorks} />
      <LazySection Section={LazyGetInTouch} />
    </div>
  );
};

export default Services;
