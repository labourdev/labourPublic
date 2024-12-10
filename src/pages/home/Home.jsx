import "./Home.scss";
import ContactUs from "../../components/buttons/contactUs/ContactUs";

import HappyWorker from "../../images/sketches/HappyWorker";
import ItWorks from "../../images/sketches/ItWorks";
import Triangle from "../../images/sketches/Triangle";
import FeaturedJobs from "../../images/sketches/FeaturedJobs";
import SmallElipse from "../../images/sketches/SmallElipse";
import MidElipse from "../../images/sketches/MidElipse";
import LargeElipse from "../../images/sketches/LargeElipse";
// import Insights from "../../images/sketches/Insights";
import InTouch from "../../images/sketches/InTouch";

import JobBag from "../../images/icons/JobBag";
import JobBag2 from "../../images/icons/JobBag2";
import Location from "../../images/icons/Location";
import Qoutation from "../../images/icons/Qoutation";
import Star from "../../images/icons/Star";
import ArrowRight from "../../images/icons/ArrowRight";

import {
  cardsData,
  servicesData,
  howItWorksData,
  featuredJobsData,
  testimonialsData,
  insightsData,
} from "./data/homeData";

import ChooseSectionCard from "./components/ChooseSectionCard/ChooseSectionCard";
import ServicesSectionCard from "./components/ServicesCard/ServicesSectionCard";
import MainBtn from "../../components/buttons/mainBtn/MainBtn";
import LazySvgImg from "../../components/lazySvg/LazySvgImg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section d-flex align-items-center flex-column">
        <div className="texts text-center d-flex align-items-center flex-column gap-20">
          <div className="title bolder">
            Power Your Projects with Top Construction & Civil Talent
          </div>
          <div className="subtitle bolder">
            Skilled Labor Solutions. Delivered On Time. Every Time.
          </div>
          <div className="description semi-bold">
            Welcome to Labour Link Group, your trusted partner in labour hire
            solutions for the construction and civil industries across Sydney.
            We connect you with fully vetted, highly skilled professionals and
            skilled labour tailored to your specific needs. Along with flexible
            hiring solutions, we reduce your risk and boost project efficiency,
            ensuring exceptional results for your projects.
          </div>
          <div className="contanct-us">
            <ContactUs />
          </div>
          <div className="triangles-mobile">
            <div className="happy-worker-mobile">
              <HappyWorker />
            </div>
            <Triangle color={"primary"} mirror={"mirror"} />
            <Triangle color={"primary"} />
          </div>
        </div>
        <div className="happy-worker-web">
          <LazySvgImg SvgComponent={HappyWorker} />
        </div>
        <div className="small-elipse">
          <LazySvgImg SvgComponent={SmallElipse} />
        </div>
        <div className="mid-elipse">
          <LazySvgImg SvgComponent={MidElipse} />
        </div>
        <div className="large-elipse">
          <LazySvgImg SvgComponent={LargeElipse} />
        </div>
        <div className="triangles-web">
          <Triangle color={"primary"} mirror={"mirror"} />
          <Triangle color={"primary"} />
        </div>
      </div>
      <div className="why-choose-section">
        <div className="texts d-flex align-items-center justify-content-center flex-column">
          <div className="main-section-title bolder text-center">
            Why Choose Labour Link Group?
          </div>
          <div className="desc text-center">
            At Labour Link Group, we understand that the success of your project
            depends on having the right people, in the right place, at the right
            time. That’s why we’re committed to delivering not just labour, but
            a fully integrated staffing solution that adapts to your project’s
            demands, minimizes downtime, and maximizes efficiency.
          </div>
        </div>
        <div className="cards d-flex align-items-center">
          {cardsData?.map((card, index) => (
            <ChooseSectionCard
              key={index}
              title={card.title}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
      <div className="services-section">
        <div className="texts d-flex align-items-center justify-content-center flex-column">
          <div className="title main-section-title">Our Services</div>
          <div className="desc text-center">
            Labour Link Group connects you with skilled professionals through
            our Labour Hire, Permanent Hire, and Specialized Trades services,
            ensuring your projects are completed on time, on budget, and to the
            highest standards.
          </div>
        </div>
        <div className="cards d-flex align-items-center">
          {servicesData?.map((card, index) => (
            <ServicesSectionCard
              key={index}
              title={card.title}
              desc={card.desc}
              icon={card.icon}
            />
          ))}
        </div>
        <div className="actions d-flex align-items-center justify-content-center">
          <MainBtn title={"Find Your Next Job"} />
          <MainBtn title={"Hire Skilled Workers"} />
        </div>
        <div className="triangles">
          <Triangle color={"white"} mirror={"mirror"} />
          <Triangle color={"white"} />
        </div>
      </div>
      <div className="how-it-works-section">
        <div className="texts d-flex align-items-center justify-content-center flex-column">
          <div className="main-section-title">How It Works</div>
          <div className="desc text-center">
            Learn more about how we work and how we can help you achieve your
            goals.
          </div>
        </div>
        <div className="it-workrs-sketch">
          <LazySvgImg SvgComponent={ItWorks} />
        </div>
        <div className="horizontal-line"></div>
        <div className="sections-wrapper">
          {howItWorksData?.map((card, index) => (
            <div key={index}>
              <div className={`step ${card.color}`}>0{index + 1}</div>
              <div className="title">{card.title}</div>
              <div>{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="featured-sections-section">
        <div className="texts d-flex align-items-center justify-content-center flex-column">
          <div className="main-section-title ">Featured Jobs</div>
          <div className="desc text-center">
            Discover the best job opportunities tailored to your career goals
          </div>
        </div>
        <div className="featured-jobs-sket">
          <LazySvgImg SvgComponent={FeaturedJobs} />
        </div>
        <div className="sections-wrapper">
          {featuredJobsData?.map((card, index) => (
            <div className="card" key={index}>
              <LazySvgImg SvgComponent={JobBag} />
              <div className="title">{card.title}</div>
              <div className="location-wrapper">
                <div className="country">
                  <LazySvgImg SvgComponent={Location} /> {card.country}
                </div>
                |<div>{card.city}</div>|<div>{card.location}</div>
              </div>
              <div className="job-duration">
                <LazySvgImg SvgComponent={JobBag2} />
                {card.duration}
              </div>
              <div className="job-type-wrapper">
                <div className="job-type">{card.type}</div>
                {card.isRemote && <div className="is-remote">Remote</div>}
              </div>
              <div>{card.desc}</div>
              <MainBtn title={"Apply Now"} />
            </div>
          ))}
        </div>
      </div>
      <div className="main-section-cta">
        <MainBtn title={"Browse All Jobs"} />
      </div>
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
                  <LazySvgImg key={index} SvgComponent={Star} />
                ))}
              </div>
              {card.name}
            </div>
          ))}
        </div>
      </div>
      <div className="insights-section">
        <div className="texts d-flex align-items-center justify-content-center flex-column">
          <div className="main-section-title">Latest Insight</div>
          <div className="desc text-center">
            Stay up-to-date with the latest industry trends, news, and best
            practices.
          </div>
        </div>
        <div className="small-elipse">
          <LazySvgImg SvgComponent={SmallElipse} />
        </div>
        <div className="large-elipse">
          <LazySvgImg SvgComponent={LargeElipse} />
        </div>
        <div className="triangles">
          <Triangle color={"white"} mirror={"mirror"} />
          <Triangle color={"white"} />
        </div>
        <div className="sections-wrapper">
          {insightsData?.map((card, index) => (
            <div className="card" key={index}>
              <div className="title">{card.name}</div>
              <div className="discover-more">
                Discover More <ArrowRight />
              </div>
            </div>
          ))}
        </div>
        <div className="main-section-cta">
          <MainBtn title={"Explore More Insights"} />
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
        <LazySvgImg SvgComponent={InTouch} />
      </div>
    </div>
  );
};

export default Home;
