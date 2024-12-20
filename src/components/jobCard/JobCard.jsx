import React from "react";
import LazySvgImg from "../lazySvg/LazySvgImg";
import Location from "../../images/icons/Location";
import MainBtn from "../buttons/mainBtn/MainBtn";
import JobBag2 from "../../images/icons/JobBag2";
import JobBag from "../../images/icons/JobBag";

const JobCard = ({ card }) => {
  return (
    <div className="job-card">
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
  );
};

export default JobCard;
