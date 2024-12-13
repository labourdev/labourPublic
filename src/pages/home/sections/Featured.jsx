import React from "react";
import MainBtn from "../../../components/buttons/mainBtn/MainBtn";
import LazySvgImg from "../../../components/lazySvg/LazySvgImg";

import JobBag from "../../../images/icons/JobBag";
import JobBag2 from "../../../images/icons/JobBag2";
import Location from "../../../images/icons/Location";

import { featuredJobsData } from "../data/homeData";

const Featured = () => {
  return (
    <div className="featured-sections-section">
      <div className="texts d-flex align-items-center justify-content-center flex-column">
        <div className="main-section-title ">Featured Jobs</div>
        <div className="desc text-center">
          Discover the best job opportunities tailored to your career goals
        </div>
      </div>
      <div className="featured-jobs-sket">
        <img
          src="/labourPublic/images/FeaturedJobs.png"
          alt="ItWorks"
          loading="lazy"
        />
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
  );
};

export default Featured;
