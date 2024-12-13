import React from "react";
import MainBtn from "../buttons/mainBtn/MainBtn";
import LazySvgImg from "../lazySvg/LazySvgImg";

import InTouch from "../../images/sketches/InTouch";

const GetInTouch = () => {
  return (
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
  );
};

export default GetInTouch;
