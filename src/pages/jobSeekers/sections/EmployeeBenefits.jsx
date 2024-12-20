import React from "react";
import { employeeBenefitsData } from "../data/jobSeekersData";

const EmployeeBenefits = () => {
  return (
    <div className="employee-benefits page-section-padding">
      <div className="main-section-title">Employee Benefits</div>
      <div className="desc text-center mt-10">
        At Labour Link Group, we value our employees and offer a range of
        benefits to support your career.
      </div>
      <div className="cards d-flex align-items-center justify-content-between gap-15">
        {employeeBenefitsData?.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.icon} alt="service" loading="lazy" />
            <div className="title">{card.title}</div>
            <div>{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeBenefits;
