import React from "react";
import MainBtn from "../../../components/buttons/mainBtn/MainBtn";
import Triangle from "../../../images/sketches/Triangle";

const Request = () => {
  return (
    <div className="request-staff">
      <div className="wrapper page-section-padding d-flex justify-content-between gap-20">
        <div className="texts">
          <div className="main-section-title">Request Staff</div>
          <div className="mt-20">
            Ready to build your team? Simplify hiring with our tailored labour
            solutions. Whether you need labourers, skilled tradespeople, or
            long-term staff, we’ll help you meet your project goals. Contact us
            for a free consultation or use the form below to request exactly
            what you need.
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
          <img
            className="request-image"
            src="/images/employerPage/Request.png"
            alt="request"
          />
        </div>
      </div>
      <div className="triangles d-flex align-items-center">
        <Triangle color={"primary"} mirror={"mirror"} />
        <Triangle color={"primary"} />
      </div>
    </div>
  );
};

export default Request;
