import React from "react";
import { servicesData } from "../data/employersData";

const Services = () => {
  return (
    <div className="services-section page-section-padding">
      <div className="d-flex align-items-center justify-content-center">
        <div className="arrow-down"></div>
      </div>
      <div className="main-section-title text-center">Our Services</div>
      <div className="text-center mt-20">
        We offer a range of labour hire and staffing solutions designed to meet
        the specific needs of your projects.
      </div>
      <div className="wrapper d-flex align-items-center justify-content-between mt-30">
        <img
          className="services-img"
          src="/labourPublic/images/employerPage/EmployerServices.png"
          alt="ServicesImage"
        />
        <div className="data-wrapper d-flex align-items-center flex-column gap-20">
          {servicesData.map((card, index) => (
            <div className="card d-flex align-items-center gap-20" key={index}>
              <img
                className="service-icon"
                src={card.icon}
                alt="service-icon"
              />
              <div>
                <div className="title bold">{card.title}</div>
                <div>{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
