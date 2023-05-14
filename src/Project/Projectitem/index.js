import Slider from "react-slick";
import SimpleImageSlider from "react-simple-image-slider";
import "./index.css";

const Projectlist = (props) => {
  const { objects } = props;
  const {
    arr,
    title,
    lid,
    imgurl,
    technologies,
    description,
    viewproject,
    githubcode,
  } = objects;
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };
  return (
    <li className="projectlist">
      {/* <SimpleImageSlider
        className="objectset"
        width="50%"
        height={300}
        images={arr}
        showNavs={true}
      /> */}
      {/* <div className="courselcontainer">
        <ul className="sliderunorder">
          <Slider {...settings}>
            {arr.map((object) => (
              <li key={object.id}>
                <img alt="offer" src={object.image} className="itemcoursel" />
              </li>
            ))}
          </Slider>
        </ul>
      </div> */}
      <div className="project-img-container">
        <img className="project-img" src={imgurl} alt="projectimg" />
      </div>
      <div className="project-content-container">
        <h1 className="projecttitle">{title}</h1>

        <p className="descriptiondata">{description}</p>

        <p>Technologies Used:- {technologies}</p>
        <div>
          <a href={viewproject} target="_blank">
            <button className="projectviewbutton">view project</button>
          </a>
          <a href={githubcode} target="_blank">
            <button className="projectviewbutton">Github</button>
          </a>
        </div>
      </div>
    </li>
  );
};
export default Projectlist;
