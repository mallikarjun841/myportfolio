import React from "react";
import Projectlist from "./Projectitem";
import "./index.css";
import Headers from "../Header";
import Sidemenu from "../sidemenu";

const coursellist = [
  {
    lid: 1,
    imgurl: "projectphotos/shoppingapp1.png",
    arr: [
      { url: "projectphotos/foodapp.png" },
      { url: "projectphotos/foodapp1.png" },
      { url: "projectphotos/foodapp2.png" },
      { url: "projectphotos/foodapp3.png" },
      { url: "projectphotos/foodapp4.png" },
    ],
    title: "NxtTrendz shopping app",
    description: "this is one",
    viewproject: "https://mallikarjunshop.ccbp.tech/",
    githubcode: "https://github.com/mallikarjun841/shoppingtrendz.git",
  },
  {
    lid: 2,
    imgurl: "projectphotos/foodapp.png",
    arr: [
      { url: "projectphotos/foodapp.png" },
      { url: "projectphotos/foodapp1.png" },
      { url: "projectphotos/foodapp2.png" },
      { url: "projectphotos/foodapp3.png" },
      { url: "projectphotos/foodapp4.png" },
    ],
    title: "tastykitchens restaurant app",
    description: "this is one",
    viewproject: "https://mallikarjunapp2.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/TastyKitchen-zomato-swiggy-.git",
  },
];

class Projects extends React.Component {
  render() {
    return (
      <>
        <Headers />

        <div className="project-main-container">
          <Sidemenu />
          <h1 className="maintitle">Projects</h1>
          <div className="project-sub">
            <ul className="projectunorder">
              {coursellist.map((ele) => (
                <Projectlist key={ele.lid} objects={ele} />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Projects;
