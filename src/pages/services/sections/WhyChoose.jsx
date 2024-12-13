import React from "react";
import LazySvgImg from "../../../components/lazySvg/LazySvgImg";
import { whyChooseData } from "../data/servicesData";

const WhyChoose = () => {
  return (
    <div className="why-choose-section">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="main-section-title">Why Choose Labour Link Group?</div>
        <div className="text-center mt-10">
          At Labour Link Group, we understand that the success of your project
          depends on having the right people, in the right place, at the right
          time. That’s why we’re committed to delivering not just labour, but a
          fully integrated staffing solution that adapts to your project’s
          demands, minimizes downtime, and maximizes efficiency.
        </div>
        <div className="mt-30 bold key-advs">Key Advantages</div>
      </div>
      <div className="data-wrapper mt-20 d-flex justify-content-between gap-10">
        {whyChooseData?.map((card, index) => (
          <div
            key={index}
            className="card-wrapper d-flex justify-content-between align-items-center text-center flex-column gap-10"
          >
            <LazySvgImg SvgComponent={card.icon} />
            <div className="mt-20">{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
