import LazySvgImg from "../../../../components/lazySvg/LazySvgImg";
import ArrowRight from "../../../../images/icons/ArrowRight";
import "./ServicesSectionCard.scss";

const ServicesSectionCard = ({ title, desc, icon: Icon }) => {
  return (
    <div className="services-section-card-container">
      <LazySvgImg SvgComponent={Icon} />
      <div className="title">{title}</div>
      <div>{desc}</div>
      <div className="discover-more">
        Discover More <LazySvgImg SvgComponent={ArrowRight} />
      </div>
    </div>
  );
};

export default ServicesSectionCard;
