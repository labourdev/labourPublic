import Stepper from "../../../components/stepper/Stepper";
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
      <Stepper data={howItWorksData} />
    </div>
  );
};

export default HowItWorks;
