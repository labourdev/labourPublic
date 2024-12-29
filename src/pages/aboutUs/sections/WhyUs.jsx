import React from "react";
import { steps } from "../data/aboutUsData";

const WhyUs = () => {
  return (
    <div className="page-section-padding why-us-section">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="main-section-title">Why Choose Us</div>
        <div className="sub-title text-center mt-30">
          What sets Labour Link Group apart is our deep-rooted understanding of
          the construction and civil sectors, combined with our personalized
          approach to service. Here’s why clients continue to choose us:
        </div>
      </div>
      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <div
            key={index}
            className="step d-flex justify-content-center gap-30"
          >
            <div className="content">
              {!!(index % 2) && (
                <>
                  <div className="title bold">{step.title}</div>
                  <div className="mt-20">{step.desc}</div>
                </>
              )}
            </div>
            <div className="separator-wrapper">
              <div className="separator"></div>
              <div className="num bold d-flex align-items-center justify-content-center">
                0{index + 1}
              </div>
            </div>
            <div className="content">
              {!(index % 2) && (
                <>
                  <div className="title bold">{step.title}</div>
                  <div className="mt-20">{step.desc}</div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
