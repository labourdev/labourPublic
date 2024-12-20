import React from "react";
import LazySvgImg from "../lazySvg/LazySvgImg";
import Qoutation from "../../images/icons/Qoutation";
import Star from "../../images/icons/Star";

const Testimonial = ({ card }) => {
  return (
    <div className="testimonial-card">
      <LazySvgImg SvgComponent={Qoutation} />
      {card.desc}
      <div className="stars">
        {Array.from({ length: 4 }).map((_, index) => (
          <Star />
        ))}
      </div>
      {card.name}
    </div>
  );
};

export default Testimonial;
