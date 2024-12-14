import React from "react";
import "./Employers.scss";

import EmployersServices from "../../images/sketches/EmployersServices";
import {
  caseStudies,
  clientTestimonials,
  howItWorksData,
  servicesData,
  whyUsData,
} from "./data/employersData";
import RequestStaff from "../../images/sketches/RequestStaff";
import MainBtn from "../../components/buttons/mainBtn/MainBtn";
import Triangle from "../../images/sketches/Triangle";
import Star from "../../images/icons/Star";
import GetInTouch from "../../components/getInTouch/GetInTouch";

const Employers = () => {
  return (
    <div className="employers-container">
      <div className="page-section-padding text-center">
        <div className="main-section-title"> Introduction</div>
        <div className="mt-20 text-center">
          At Labour Link Group, we understand that the success of your projects
          hinges on having the right people in place. We specialize in providing
          skilled labour solutions tailored to the unique demands of the
          construction, building, and civil engineering industries. Whether you
          require a single labourer for a short-term project or an entire team
          for a long-term placement, we have the expertise and resources to
          deliver precisely what you need.
        </div>
      </div>
      <div className="services-section page-section-padding">
        <div className="d-flex align-items-center justify-content-center">
          <div className="arrow-down"></div>
        </div>
        <div className="main-section-title text-center">Our Services</div>
        <div className="text-center mt-20">
          We offer a range of labour hire and staffing solutions designed to
          meet the specific needs of your projects.
        </div>
        <div className="wrapper d-flex align-items-center justify-content-between mt-30">
          <EmployersServices />
          <div className="data-wrapper d-flex align-items-center flex-column gap-20">
            {servicesData.map((card, index) => (
              <div
                className="card d-flex align-items-center gap-20"
                key={index}
              >
                <card.icon />
                <div>
                  <div className="title bold">{card.title}</div>
                  <div>{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="why-with-us">
        <div className="main-section-title text-center">Why Work With Us</div>
        <div className="mt-20 text-center">
          Partnering with Labour Link Group brings a host of benefits that
          streamline your staffing process and elevate your project's success:
        </div>
        <div className="data-wrapper mt-30 d-flex align-items-center justify-content-between gap-20">
          {whyUsData.map((card, index) => (
            <div key={index} className="card">
              <card.icon />
              <div className="mt-20 bold">{card.title}</div>
              <div className="desc mt-10">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="how-it-works-section">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="main-section-title">Our Hiring Process</div>
          <div className="text-center mt-10">
            We pride ourselves on a meticulous hiring process that matches the
            right workers with the right employers:
          </div>
        </div>
        <div className="mt-50">
          <div className="horizontal-line"></div>
          <div className="sections-wrapper d-flex justify-content-between gap-25">
            {howItWorksData?.map((card, index) => (
              <div key={index}>
                <div className={`step ${card.color}`}>0{index + 1}</div>
                <div className="title">{card.title}</div>
                <div>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="request-staff">
        <div className="wrapper page-section-padding d-flex justify-content-between gap-20">
          <div className="texts">
            <div className="main-section-title">Request Staff</div>
            <div className="mt-20">
              Ready to build your team? Simplify hiring with our tailored labour
              solutions. Whether you need labourers, skilled tradespeople, or
              long-term staff, we’ll help you meet your project goals. Contact
              us for a free consultation or use the form below to request
              exactly what you need.
            </div>
            <div
              className="mt-30"
              onClick={() =>
                window.open("https://forms.gle/UtZd3f8PJBcL3Ubu6", "_blank")
              }
            >
              <MainBtn title={"Request Now!"} />
            </div>
          </div>
          <div className="shrink-0">
            <RequestStaff />
          </div>
        </div>
        <div className="triangles d-flex align-items-center">
          <Triangle color={"primary"} mirror={"mirror"} />
          <Triangle color={"primary"} />
        </div>
      </div>
      <div className="case-studies page-section-padding">
        <div className="main-section-title text-center">Case Studies</div>
        <div className="mt-20 text-center">
          Explore in-depth examples of how Labour Link Group has successfully
          partnered with other companies to deliver exceptional results. Each
          case study showcases:
        </div>
        <div className="data-wrapper mt-20 d-flex align-items-center justify-content-between gap-25">
          {caseStudies.map((card, index) => (
            <div key={index} className="card">
              <card.icon />
              <div className="bold title">{card.title}</div>
              <div className="mt-10">{card.desc}</div>
              <div className="btn mt-30">
                <MainBtn title={"Continue Reading"} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="client-testimonials page-section-padding">
        <div className="main-section-title text-center">
          Client Testimonials
        </div>
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
      <GetInTouch />
    </div>
  );
};

export default Employers;
