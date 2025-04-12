import React from "react";
import MainBtn from "../../../components/buttons/mainBtn/MainBtn";
import Triangle from "../../../images/sketches/Triangle";

const LargeCard = ({ data }) => {
  return (
    <div
      className="large-card-container"
      style={{ backgroundColor: data.backgroundColor }}
    >
      <div className="page-section-padding">
        <div className="main-section-title">{data.title}</div>
        <div className="desc text-center">{data.desc}</div>
        <div className="content-wrapper d-flex justify-content-between mt-50">
          <div>
            {data.sublist.map((sub, index) => (
              <div key={index} className="mb-30">
                <div className="sub-title mb-10">{sub.title}</div>
                {sub.points.map((point, index) => (
                  <div key={index} className="point mb-10">
                    <div className="d-flex align-items-start">
                      <img src="/images/ticIcon.png" alt="" className="mr-10" />
                      <div>{point.text}</div>
                    </div>

                    <ul className="sub-points-wrapper ml-10">
                      {point.subpoints?.map((subpoint, index) => (
                        <li key={index}>{subpoint.text}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
            <div onClick={() => window.open(data.formLink, "_blank")}>
              <MainBtn title={data.ctaAction} />
            </div>
          </div>
          <img
            src={data.icon}
            alt="cardImage"
            loading="lazy"
            className="largeImage"
          />
        </div>
      </div>
      <div
        className="triangles d-flex align-items-center"
        style={{ display: data.displayTriangles }}
      >
        <Triangle color={"white"} mirror={"mirror"} />
        <Triangle color={"white"} />
      </div>
    </div>
  );
};

export default LargeCard;
