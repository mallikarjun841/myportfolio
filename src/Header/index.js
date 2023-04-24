import { Link } from "react-router-dom";
import "./index.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useGlobalContext } from "../ReactContext/context";
import "boxicons";
import { useContext } from "react";

const Headers = (props) => {
  const [status, setStatus] = useGlobalContext();

  return (
    <header>
      <Link className="link logo" to="/">
        Porfolio
      </Link>
      <nav>
        <button className={`threeline `} onClick={() => setStatus(!status)}>
          {status ? "=" : "X"}
        </button>
        {/* <ul className={`unorder ${status && "active"}`}>
          <li>
            <Link to="/" className="link h1">
              Home
            </Link>
          </li>
          <li>
            <Link to="/project" className="link h2">
              Project
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link h2">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/work" className="link">
              work
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/more" className="link">
              More
            </Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Headers;
