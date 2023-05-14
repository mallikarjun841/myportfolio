import "./index.css";

const Tech = (props) => {
  const { element } = props;
  const { technologyname, image, category } = element;
  console.log(image);

  return (
    <div className="techcontainer">
      <img className="techimg" src={image} alt={technologyname} />
      <span className="technames">{technologyname}</span>
    </div>
  );
};

export default Tech;
