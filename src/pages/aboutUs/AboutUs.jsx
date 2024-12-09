import MainBtn from "../../components/buttons/mainBtn/MainBtn";
import Hero from "../../images/pictures/AboutUs/Hero";
import Vision from "../../images/pictures/AboutUs/Vision";
import Triangle from "../../images/sketches/Triangle";
import "./AboutUs.scss";
import { steps, team, values } from "./data/aboutUsData";

import Goals from "../../images/icons/AboutUs/Goals";
import InTouch from "../../images/sketches/InTouch";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="hero-wrapper">
        <div className="d-flex justify-content-between page-section-padding gap-20 hero-section">
          <div className="text-wrapper">
            <div className="main-section-title">
              Your Trusted Partner in Labour Hire Solutions
            </div>
            <div className="desc mt-30">
              Labour Link Group is a premier labour hire provider dedicated to
              the construction and civil industries. Founded with a mission to
              bridge the gap between companies and the skilled labour force they
              need, we leverage years of experience and deep industry knowledge
              to provide workforce solutions that are both effective and
              efficient. Our commitment to quality, safety, and compliance
              ensures your projects are in capable hands, making us your trusted
              partner in labour solutions.
            </div>
            <div className="btn mt-30">
              <MainBtn title={"Contact Us"} />
            </div>
          </div>
          <div className="flex-shrink hero-img">
            <Hero />
          </div>
        </div>
        <div className="triangles d-flex align-items-center">
          <Triangle color={"primary"} mirror={"mirror"} />
          <Triangle color={"primary"} />
        </div>
      </div>
      <div className="page-section-padding d-flex justify-content-center align-items-center vision-mession-section">
        <div className="image-wrapper">
          <Vision />
        </div>
        <div className="left-section">
          <div className="main-section-title">Our Vision</div>
          <div>
            To be the leading provider of skilled labour in the construction and
            civil industries, known for our unwavering commitment to quality,
            safety, and client satisfaction.
          </div>
          <div className="main-section-title mt-30">Our Mission</div>
          <div>
            To elevate the standards of labour hire by connecting Sydney's top
            talent with projects that matter. Through rigorous compliance,
            unmatched safety standards, and a commitment to workforce
            excellence, we ensure that every project we support is a success.
          </div>
        </div>
      </div>
      <div className="page-section-padding our-values-section">
        <div className="main-section-title">Our Values</div>
        <div className="cards-wrapper d-flex align-items-center mt-30 gap-20">
          {values.map((value, index) => (
            <div key={index} className={`card ${value.color}`}>
              <value.icon />
              <div className="mt-20 title bold">{value.title}</div>
              <div className="mt-10">{value.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="page-section-padding why-us-section">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <div className="main-section-title">Why Choose Us</div>
          <div className="sub-title text-center mt-30">
            What sets Labour Link Group apart is our deep-rooted understanding
            of the construction and civil sectors, combined with our
            personalized approach to service. Here’s why clients continue to
            choose us:
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
      <div className="page-section-padding meet-team-section">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <div className="main-section-title">Meet Our Team</div>
          <div className="sub-title text-center mt-30">
            At Labour Link Group, we believe that our team is our greatest
            asset. Meet our leadership team, who bring a wealth of experience
            and dedication to every project.
          </div>
        </div>
        <div className="members d-flex align-items-center justify-content-between mt-30 gap-25">
          {team.map((member, index) => (
            <div
              key={index}
              className="card d-flex flex-column align-items-center"
            >
              <member.icon />
              <div className="name mt-10 bold">{member.name}</div>
              <div>{member.job}</div>
              <div className="separator mt-10"></div>
              <div className="desc mt-10 text-center">{member.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="vision-goals-section">
        <div className="vision-triangles d-flex align-items-center">
          <Triangle color={"white"} mirror={"mirror"} />
          <Triangle color={"white"} />
        </div>
        <div className="wrapper page-section-padding d-flex align-items-center gap-30">
          <Goals />
          <div className="separator"></div>
          <div className="content">
            <div className="main-section-title">Vision & Goals</div>
            <div className="mt-10">
              Our vision is to be the leading provider of skilled labour in
              Sydney, recognized for our dedication to quality, safety, and
              client satisfaction. We strive to continuously improve our
              processes and expand our services to better meet the evolving
              needs of the construction, residential, and civil industries. By
              building stronger client relationships and adapting to industry
              changes, we aim to remain at the forefront of labour hire
              solutions.
            </div>
          </div>
        </div>
      </div>
      <div className="get-in-touch-section d-flex align-items-center justify-content-between">
        <div className="texts d-flex flex-column justify-content-between">
          <div className="main-section-title">Get In Touch With Us</div>
          <div className="text text-center">
            Ready to hire or need more information? We’re here to help.
          </div>
          <MainBtn title={"Contact Us"} />
        </div>
        <InTouch />
      </div>
    </div>
  );
};

export default AboutUs;
