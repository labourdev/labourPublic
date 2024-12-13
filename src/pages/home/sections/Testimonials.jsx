import React from "react";
import LazySvgImg from "../../../components/lazySvg/LazySvgImg";

import Qoutation from "../../../images/icons/Qoutation";
import Star from "../../../images/icons/Star";
import { testimonialsData } from "../data/homeData";

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
          <div className="card" key={index}>
            <LazySvgImg SvgComponent={Qoutation} />
            {card.desc}
            <div className="stars">
              {Array.from({ length: 4 }).map((_, index) => (
                <Star />
              ))}
            </div>
            {card.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
