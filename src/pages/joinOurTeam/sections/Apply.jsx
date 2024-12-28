import React from "react";
import MainBtn from "../../../components/buttons/mainBtn/MainBtn";

const Apply = () => {
  return (
    <div className="page-section-padding">
      <div className="main-section-title">Apply Today!</div>
      <div className="desc text-center mt-20">
        We’re always looking for talented individuals to join our team. Whether
        you’re an experienced recruiter, an operations leader, or a student
        seeking internship opportunities, we’d love to hear from you. Submit
        your application today and take the next step in your career with Labour
        Link Group.
      </div>
      <div className="d-flex align-items-center justify-content-center mt-30">
        <div
          onClick={() =>
            window.open("https://forms.gle/wQwL73z7V4ysEaWK9", "_blank")
          }
        >
          <MainBtn title={"Submit your CV"} />
        </div>
      </div>
    </div>
  );
};

export default Apply;
