import React from "react";
import "./ContactUs.scss";
import ArrowRight from "../../../images/icons/ArrowRight";

const ContactUs = (props) => {
  return (
    <div className={`btnContainer ${props.class || "defaultClass"}`}>
      Contact Us <ArrowRight />
    </div>
  );
};

export default ContactUs;
