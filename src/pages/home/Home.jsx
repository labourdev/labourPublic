import "./Home.scss";
import React from "react";

import MainBtn from "../../components/buttons/mainBtn/MainBtn";
import LazySection from "../../components/lazySection/LazySection";
import Hero from "./sections/Hero";

// Lazy Sections
const LazyWhyChoose = React.lazy(() => import("./sections/WhyChoose"));
const LazyServices = React.lazy(() => import("./sections/Services"));
const LazyHowItWorks = React.lazy(() => import("./sections/HowItWorks"));
const LazyFeatured = React.lazy(() => import("./sections/Featured"));
const LazyTestimonials = React.lazy(() => import("./sections/Testimonials"));
const LazyInsights = React.lazy(() => import("./sections/Insights"));
const LazyGetInTouch = React.lazy(() =>
  import("../../components/getInTouch/GetInTouch")
);

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <LazySection Section={LazyWhyChoose} />
      <LazySection Section={LazyServices} />
      <LazySection Section={LazyHowItWorks} />
      <LazySection Section={LazyFeatured} />
      <div className="main-section-cta">
        <MainBtn title={"Browse All Jobs"} />
      </div>
      <LazySection Section={LazyTestimonials} />
      <LazySection Section={LazyInsights} />
      <LazySection Section={LazyGetInTouch} />
    </div>
  );
};

export default Home;
