import ArrowRight from "../../../../images/icons/ArrowRight";
import "./ServicesSectionCard.scss";

const ServicesSectionCard = ({ title, desc, icon: Icon }) => {
  return (
    <div className="services-section-card-container">
      <Icon />
      <div className="title">{title}</div>
      <div>{desc}</div>
      <div className="discover-more">
        Discover More <ArrowRight />
      </div>
    </div>
  );
};

export default ServicesSectionCard;
