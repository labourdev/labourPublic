import React from "react";
import ServicesSectionCard from "../components/ServicesCard/ServicesSectionCard";
import MainBtn from "../../../components/buttons/mainBtn/MainBtn";
import Triangle from "../../../images/sketches/Triangle";
import { servicesData } from "../data/homeData";

const Services = () => {
  return (
    <div className="services-section">
      <div className="texts d-flex align-items-center justify-content-center flex-column">
        <div className="title main-section-title">Our Services</div>
        <div className="desc text-center">
          Labour Link Group connects you with skilled professionals through our
          Labour Hire, Permanent Hire, and Specialized Trades services, ensuring
          your projects are completed on time, on budget, and to the highest
          standards.
        </div>
      </div>
      <div className="cards d-flex align-items-center">
        {servicesData?.map((card, index) => (
          <ServicesSectionCard
            key={index}
            title={card.title}
            desc={card.desc}
            icon={card.icon}
          />
        ))}
      </div>
      <div className="actions d-flex align-items-center justify-content-center">
        <MainBtn title={"Find Your Next Job"} />
        <div
          onClick={() =>
            window.open("https://forms.gle/UtZd3f8PJBcL3Ubu6", "_blank")
          }
        >
          <MainBtn title={"Hire Skilled Workers"} />
        </div>
      </div>
      <div className="triangles">
        <Triangle color={"white"} mirror={"mirror"} />
        <Triangle color={"white"} />
      </div>
    </div>
  );
};

export default Services;
