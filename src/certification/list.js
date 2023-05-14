import Certificates from "./certificates";

const Listcertificate = (props) => {
  const { elements } = props;
  const { images, technologynames, clink } = elements;

  return (
    <li className="certificatelist">
      <img className="certimg" src={images} alt="certificate" />
      <div>
        <h1 className="certtech">{technologynames}</h1>
        <a
          style={{
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "20px",
          }}
          href={clink}
        >
          <button className="certificateviewbutton">View Certificate</button>
        </a>
      </div>
    </li>
  );
};

export default Listcertificate;
