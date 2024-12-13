import React from "react";
import LazySvgImg from "../../../components/lazySvg/LazySvgImg";
import Triangle from "../../../images/sketches/Triangle";
import ArrowRight from "../../../images/icons/ArrowRight";
import MainBtn from "../../../components/buttons/mainBtn/MainBtn";

import SmallElipse from "../../../images/sketches/SmallElipse";
import LargeElipse from "../../../images/sketches/LargeElipse";
import { insightsData } from "../data/homeData";

const Insights = () => {
  return (
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
  );
};

export default Insights;
