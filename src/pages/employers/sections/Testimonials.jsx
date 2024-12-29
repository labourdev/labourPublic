import React from "react";
import { clientTestimonials } from "../data/employersData";
import Star from "../../../images/icons/Star";

const Testimonials = () => {
  return (
    <div className="client-testimonials page-section-padding">
      <div className="main-section-title text-center">Client Testimonials</div>
      <div className="mt-20 text-center">
        Our clients' success stories speak volumes about the value we bring to
        their projects:
      </div>
      <div className="data-wrapper mt-30 d-flex align-items-center justify-content-between gap-25">
        {clientTestimonials.map((card, index) => (
          <div key={index} className="card">
            <card.icon />
            <div className="mt-30">{card.desc}</div>
            <div className="d-flex align-items-center mt-10">
              {Array.from({ length: 4 }).map((_, index) => (
                <Star key={index} />
              ))}
            </div>
            <div className="bold mt-20">{card.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
