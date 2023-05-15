import { Link } from "react-router-dom";
import { useGlobalContext } from "../ReactContext/context";
import "./index.css";

const Sidemenu = () => {
  const [status, setStatus] = useGlobalContext();
  return (
    <div className={`sidebar ${status && "active"}`}>
      <ul className="unorder">
        <li className="listdata">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="listdata">
          <Link to="/projects" className="link">
            Project
          </Link>
        </li>
        <li className="listdata">
          <Link to="/contact/" className="link">
            Contact
          </Link>
        </li>
        <li className="listdata">
          <Link to="/certifications/" className="link">
            certification
          </Link>
        </li>
        <li className="listdata">
          <Link to="/about/" className="link">
            About
          </Link>
        </li>
//         <li className="listdata">
//           <Link to="/more" className="link">
//             More
//           </Link>
//         </li>
      </ul>
    </div>
  );
};

export default Sidemenu;
