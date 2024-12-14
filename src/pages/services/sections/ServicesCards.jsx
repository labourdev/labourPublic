import React from "react";
import { servicesData } from "../data/servicesData";
import LazySvgImg from "../../../components/lazySvg/LazySvgImg";

const ServicesCards = () => {
  return (
    <>
      {servicesData?.map((card, index) => (
        <div
          key={index}
          className={`d-flex align-items-center justify-content-between gap-20 services-big-card ${card.background}`}
        >
          <div className="content" key={index}>
            <div className="number">0{index + 1}</div>
            <div className="main-section-title">{card.title}</div>
            <div className="desc">{card.desc}</div>
            <div className="sub-section-wrapper">
              {card.subSections.map((sub, index) => (
                <div className="d-flex gap-20 mt-10" key={index}>
                  <div className="shrink-0">
                    <LazySvgImg SvgComponent={sub.icon} />
                  </div>
                  <div>
                    <div className="bold">{sub.title}</div>
                    <div>{sub.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="main-icon">
            <img src={card.icon} alt="service" loading="lazy" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ServicesCards;
