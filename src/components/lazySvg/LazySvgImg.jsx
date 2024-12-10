import { useInView } from "react-intersection-observer";

const LazySvgImg = ({ SvgComponent }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Load the SVG only once when it first comes into view
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return <div ref={ref}>{inView ? <SvgComponent /> : null}</div>;
};

export default LazySvgImg;
