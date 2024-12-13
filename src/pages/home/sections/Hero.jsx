import React from "react";
import ContactUs from "../../../components/buttons/contactUs/ContactUs";
import LazySvgImg from "../../../components/lazySvg/LazySvgImg";
import Triangle from "../../../images/sketches/Triangle";
import HappyWorker from "../../../images/sketches/HappyWorker";
import SmallElipse from "../../../images/sketches/SmallElipse";
import MidElipse from "../../../images/sketches/MidElipse";
import LargeElipse from "../../../images/sketches/LargeElipse";

const Hero = () => {
  return (
    <div className="hero-section d-flex align-items-center flex-column">
      <div className="texts text-center d-flex align-items-center flex-column gap-20">
        <div className="title bolder">
          Power Your Projects with Top Construction & Civil Talent
        </div>
        <div className="subtitle bolder">
          Skilled Labor Solutions. Delivered On Time. Every Time.
        </div>
        <div className="description semi-bold">
          Welcome to Labour Link Group, your trusted partner in labour hire
          solutions for the construction and civil industries across Sydney. We
          connect you with fully vetted, highly skilled professionals and
          skilled labour tailored to your specific needs. Along with flexible
          hiring solutions, we reduce your risk and boost project efficiency,
          ensuring exceptional results for your projects.
        </div>
        <div className="contanct-us">
          <ContactUs />
        </div>
        <div className="triangles-mobile">
          <div className="happy-worker-mobile">
            <LazySvgImg SvgComponent={HappyWorker} />
          </div>
          <Triangle color={"primary"} mirror={"mirror"} />
          <Triangle color={"primary"} />
        </div>
      </div>
      <div className="happy-worker-web">
        <LazySvgImg SvgComponent={HappyWorker} />
      </div>
      <div className="small-elipse">
        <LazySvgImg SvgComponent={SmallElipse} />
      </div>
      <div className="mid-elipse">
        <LazySvgImg SvgComponent={MidElipse} />
      </div>
      <div className="large-elipse">
        <LazySvgImg SvgComponent={LargeElipse} />
      </div>
      <div className="triangles-web">
        <Triangle color={"primary"} mirror={"mirror"} />
        <Triangle color={"primary"} />
      </div>
    </div>
  );
};

export default Hero;
