import React from "react";
import "./Employers.scss";

import GetInTouch from "../../components/getInTouch/GetInTouch";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import LazySection from "../../components/lazySection/LazySection";

const WhyUs = React.lazy(() => import("./sections/WhyUs"));
const HowItWorks = React.lazy(() => import("./sections/HowItWorks"));
const Request = React.lazy(() => import("./sections/Request"));
const Cases = React.lazy(() => import("./sections/Cases"));
const Testimonials = React.lazy(() => import("./sections/Testimonials"));

const Employers = () => {
  return (
    <div className="employers-container">
      <Hero />
      <Services />
      <LazySection Section={WhyUs} />
      <LazySection Section={HowItWorks} />
      <LazySection Section={Request} />
      <LazySection Section={Cases} />
      <LazySection Section={Testimonials} />
      <GetInTouch />
    </div>
  );
};

export default Employers;
