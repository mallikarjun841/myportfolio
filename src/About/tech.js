import "./index.css";

const Tech = (props) => {
  const { element } = props;
  console.log(element);
  const { technologyname, image, category } = element;

  return (
    <div className="techcontainer">
      <img className="techimg" src={image} alt={technologyname} />
      <span className="technames">{technologyname}</span>
    </div>
  );
};

export default Tech;
