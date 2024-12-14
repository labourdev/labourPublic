import React from "react";
import "./ContactUs.scss";
import ArrowRight from "../../../images/icons/ArrowRight";

const ContactUs = (props) => {
  return (
    <div
      className={`btnContainer ${props.class || "defaultClass"}`}
      onClick={() =>
        window.open("https://forms.gle/FwHWi69yvHyzS8Xr7", "_blank")
      }
    >
      Contact Us <ArrowRight />
    </div>
  );
};

export default ContactUs;
