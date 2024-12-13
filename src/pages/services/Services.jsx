import "./Services.scss";

import ServicesWorkers from "../../images/sketches/ServicesWorkers";
import MainBtn from "../../components/buttons/mainBtn/MainBtn";
import Triangle from "../../images/sketches/Triangle";
import {
  howItWorksData,
  servicesData,
  whyChooseData,
} from "./data/servicesData";
import LazySvgImg from "../../components/lazySvg/LazySvgImg";
import GetInTouch from "../../components/getInTouch/GetInTouch";

const Services = () => {
  return (
    <div className="services-container">
      <div className="hero-section d-flex justify-content-between">
        <div className="hero-content d-flex flex-column">
          <div className="texts d-flex flex-column">
            <div className="main-section-title">
              Tailored Labour Hire & Staffing Solutions for Construction and
              Civil Industries
            </div>
            <div className="description semi-bold text-center">
              At Labour Link Group, we specialize in providing tailored staffing
              solutions for the construction and civil engineering industries.
              Our aim is to connect you with the right talent to ensure your
              projects are completed on time, within budget, and to the highest
              standards.
            </div>
          </div>
          <MainBtn title={"Contact Us"} />
        </div>
        <div className="services-workers ">
          <ServicesWorkers />
        </div>
      </div>
      <div className="d-flex align-items-center trainagles-separator">
        <div className="d-flex triangles-wrapper">
          <Triangle color={"gray"} mirror={"mirror"} />
          <Triangle color={"gray"} />
        </div>
        <div className="left-section"></div>
      </div>
      {servicesData.map((card, index) => (
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
            <LazySvgImg SvgComponent={card.icon} />
          </div>
        </div>
      ))}
      <div className="industry-expertise d-flex flex-column text-center align-items-center justify-content-center">
        <div className="main-section-title">Industry Expertise</div>
        <div className="mt-10">
          We have extensive experience providing skilled labour across various
          sectors, including construction, civil engineering, infrastructure,
          and manufacturing. Our expertise ensures that we can meet the needs of
          any project, no matter the industry.
        </div>
      </div>
      <div className="why-choose-section">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="main-section-title">
            Why Choose Labour Link Group?
          </div>
          <div className="text-center mt-10">
            At Labour Link Group, we understand that the success of your project
            depends on having the right people, in the right place, at the right
            time. That’s why we’re committed to delivering not just labour, but
            a fully integrated staffing solution that adapts to your project’s
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
      <div className="how-it-works-section">
        <div className="triangles d-flex align-items-center">
          <Triangle color={"white"} mirror={"mirror"} />
          <Triangle color={"white"} />
        </div>
        <div className="page-section-padding">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="main-section-title">How It Works</div>
            <div className="text-center mt-10">
              Learn more about how we work and how we can help you achieve your
              goals.
            </div>
          </div>
          <div className="mt-50">
            <div className="horizontal-line"></div>
            <div className="sections-wrapper d-flex justify-content-between gap-20">
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
      </div>
      <GetInTouch />
    </div>
  );
};

export default Services;
