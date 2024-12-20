import React from "react";
import { testimonialsData } from "../data/homeData";
import Testimonial from "../../../components/testimonial/Testimonial";

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="texts d-flex align-items-center justify-content-center flex-column">
        <div className="main-section-title">Client Testimonials</div>
        <div className="desc text-center">
          Hear directly from our clients about their success with Labour Link
          Group
        </div>
      </div>
      <div className="sections-wrapper d-flex">
        {testimonialsData?.map((card, index) => (
          <div key={index}>
            <Testimonial card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
