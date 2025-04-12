import React from "react";
import MainBtn from "../../../components/buttons/mainBtn/MainBtn";
import ServicesWorkers from "../../../images/sketches/ServicesWorkers";

const Hero = () => {
  return (
    <div className="hero-section d-flex justify-content-between">
      <div className="hero-content d-flex flex-column">
        <div className="texts d-flex flex-column">
          <div className="main-section-title">
            Tailored Labour Hire & Staffing Solutions for Construction and Civil
            Industries
          </div>
          <div className="description semi-bold text-center">
            At Labour Link Group, we specialize in providing tailored staffing
            solutions for the construction and civil engineering industries. Our
            aim is to connect you with the right talent to ensure your projects
            are completed on time, within budget, and to the highest standards.
          </div>
        </div>
        <div
          onClick={() =>
            window.open("https://forms.gle/FwHWi69yvHyzS8Xr7", "_blank")
          }
        >
          <MainBtn title={"Contact Us"} />
        </div>
      </div>
      <div className="services-workers ">
        <ServicesWorkers />
      </div>
    </div>
  );
};

export default Hero;
