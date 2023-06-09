import { Link } from "react-router-dom";
import { useGlobalContext } from "../ReactContext/context";
import "./index.css";

const Sidemenu = () => {
  const [status, setStatus] = useGlobalContext();
  return (
    <div className={`sidebar ${status && "active"}`}>
      <ul className="unorder">
        <li onClick={() => setStatus(!status)} className="listdata">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li onClick={() => setStatus(!status)} className="listdata">
          <Link to="/projects" className="link">
            Project
          </Link>
        </li>
        <li onClick={() => setStatus(!status)} className="listdata">
          <Link to="/contact/" className="link">
            Contact
          </Link>
        </li>
        <li onClick={() => setStatus(!status)} className="listdata">
          <Link to="/certifications/" className="link">
            Certification
          </Link>
        </li>
        <li onClick={() => setStatus(!status)} className="listdata">
          <Link to="/about/" className="link">
            About
          </Link>
        </li>
      
      </ul>
    </div>
  );
};

export default Sidemenu;
