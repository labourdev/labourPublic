import MainBtn from "../buttons/mainBtn/MainBtn";

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
      <img
        src="/labourPublic/images/InTouch.png"
        alt="InTouch"
        loading="lazy"
      />
    </div>
  );
};

export default GetInTouch;
