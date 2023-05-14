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
              <img className="myphoto" src="/PROFILE.png" alt="profile" />
            </div>
            <div className="summary">
              <h1>Godishela Mallikarjun</h1>
              <p className="namesummary">
                Hi! There I’m Godishela Mallikarjun, a full-stack developer and
                having hands on experience on both frontend and backend. I’ve
                enrolled in a full-time immersive Full stack program at Nxtwave.
                Having just trained from this rigorous program, I can say that
                applying to this program has been the best decision I have ever
                made in my life. I love to learn new technologies and flex my
                creativity to create amazing things.I having experience in web
                Developement having strong react and javascript skills.I have
                Backend skills in Node , Database mysql and Developer Foundation
                like git and linux.
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
              <img className="hobbiesimg" src="/hobbies.jpg" alt="hobbies" />
              <p className="para">
                Besides my passion for coding, I love to play video games,
                specifically RPGs and MMORPGs. I also love to travel, swim, and
                jog. I like to watch movies and web series. I am a huge fan of
                Harry Potter. On Wednesdays, you can find me yelling at my TV
                when my favorite Survivor castaway gets voted off the island. My
                favorite foods are prawns Biryani and butter panner.
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
