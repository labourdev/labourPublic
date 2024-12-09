import "./Sketches.scss";

const Triangle = (props) => {
  return <div className={`trinagle ${props.color} ${props.mirror}`}></div>;
};

export default Triangle;
