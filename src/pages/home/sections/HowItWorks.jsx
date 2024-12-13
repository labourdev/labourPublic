import { howItWorksData } from "../data/homeData";

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <div className="texts d-flex align-items-center justify-content-center flex-column">
        <div className="main-section-title">How It Works</div>
        <div className="desc text-center">
          Learn more about how we work and how we can help you achieve your
          goals.
        </div>
      </div>
      <div className="it-workrs-sketch">
        <img
          src="/labourPublic/images/ItWorks.png"
          alt="ItWorks"
          loading="lazy"
        />
      </div>
      <div className="horizontal-line"></div>
      <div className="sections-wrapper">
        {howItWorksData?.map((card, index) => (
          <div key={index}>
            <div className={`step ${card.color}`}>0{index + 1}</div>
            <div className="title">{card.title}</div>
            <div>{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
