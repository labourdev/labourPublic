import React from "react";

const Stepper = ({ data }) => {
  return (
    <div className="stepper-component">
      <div className="horizontal-line"></div>
      <div className="steps-wrapper d-flex justify-content-between gap-25">
        {data?.map((card, index) => (
          <div key={index}>
            <div className={`step ${card.color}`}>0{index + 1}</div>
            <div className="title">{card.title}</div>
            <div>{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
