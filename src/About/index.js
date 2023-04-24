import { useContext } from "react";
import { MakeContext } from "../demo/demo";
import Headers from "../Header";
import Tech from "./tech";
import Technologies from "../TechnologiesData";
import "./index.css";
import Sidemenu from "../sidemenu";

const About = () => {
  return (
    <>
      <Headers />
      <div className="about-main-container">
        <div className="about-sub">
          <h1 className="makespace mainabout">About</h1>

          <div className="full-profile makespace">
            {" "}
            <div className="image-container">
              <img className="myphoto" src="PROFILE.png" alt="profile" />
            </div>
            <div className="summary">
              <h1>Godishela Mallikarjun</h1>
              <p className="namesummary">
                Hi! I’m Godishela Mallikarjun, a full-stack web developer and
                software engineer based in Brooklyn, NY. After working as an
                accountant for almost 7 years, I’ve decided to take the leap to
                pursue a career in software engineering. I’ve enrolled in a
                full-time immersive software engineering program at Fullstack
                Academy in NYC. Having just graduated from this rigorous
                program, I can say that applying to a coding bootcamp has been
                the best decision I have ever made in my life. I love to learn
                new technologies and flex my creativity to create amazing
                things.
              </p>
            </div>
          </div>

          <div className="technologies-container makespace">
            <h1 className="maintext">Technologies I've Worked Withs</h1>
            <div className="alltechnologies">
              <div className="boxdata">
                <h1 className="techname">Frontend Technologies</h1>
                <div className="techbox">
                  {Technologies.map((element) => {
                    if (element.category === "frontend") {
                      return <Tech element={element} />;
                    }
                    return null;
                  })}
                </div>
              </div>

              <div className="boxdata">
                <h1 className="techname">Backend Technologies</h1>
                <div className="techbox">
                  {Technologies.map((element) => {
                    if (element.category === "backend") {
                      return <Tech element={element} />;
                    }
                    return null;
                  })}
                </div>
              </div>

              <div className="boxdata">
                <h1 className="techname">Language</h1>
                <div className="techbox">
                  {Technologies.map((element) => {
                    if (element.category === "language") {
                      return <Tech element={element} />;
                    }
                    return null;
                  })}
                </div>
              </div>

              <div className="boxdata">
                <h1 className="techname">Devops</h1>
                <div className="techbox">
                  {Technologies.map((element) => {
                    if (element.category === "devops") {
                      return <Tech element={element} />;
                    }
                    return null;
                  })}
                </div>
              </div>

              <div className="boxdata">
                <h1 className="techname">Tools</h1>
                <div className="techbox">
                  {Technologies.map((element) => {
                    if (element.category === "tool") {
                      return <Tech element={element} />;
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="hobby-maincontainer">
            <h1 className="maintext">Hobbies & Interests</h1>
            <div className="hobbies-container">
              <img className="hobbiesimg" src="hobbies.jpg" alt="hobbies" />
              <p className="para">
                Besides my passion for coding, I love to play video games,
                specifically RPGs and MMORPGs. I also love to travel, swim, and
                jog. I'm a Netflix and Hulu binger. I am a huge fan of Harry
                Potter. On Wednesdays, you can find me yelling at my TV when my
                favorite Survivor castaway gets voted off the island. My
                favorite foods are phở and sushi.
              </p>
            </div>
          </div>
        </div>
        <Sidemenu />
      </div>
    </>
  );
};

export default About;
