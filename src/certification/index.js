import { useState } from "react";
import Headers from "../Header";
import Sidemenu from "../sidemenu";
import Certificates from "./certificates";
import Listcertificate from "./list";
import "./index.css";

const Certifications = () => {
  const [searchdata, setdata] = useState("");
  const filterlist = Certificates.filter((element) =>
    element.technologynames.toLocaleLowerCase().includes(searchdata)
  );
  console.log(filterlist);
  return (
    <>
      <Headers />
      <div className="certification-main-container">
        <div className="certification-sub">
          <h1 className="certificationmainheading">
            Certification of Achievement
          </h1>
          <input
            className="makesearch"
            onChange={(event) => setdata(event.target.value)}
            value={searchdata}
            type="search"
            placeholder="search..."
          />
          <div>
            {filterlist.length === 0 ? (
              <h1>No data</h1>
            ) : (
              <ul className="certificateunorder">
                {filterlist.map((elements) => (
                  <Listcertificate key={elements.id} elements={elements} />
                ))}
              </ul>
            )}
          </div>
        </div>
        <Sidemenu />
      </div>
    </>
  );
};

export default Certifications;
