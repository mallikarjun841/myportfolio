import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import Headers from "../Header";

import { useGlobalContext } from "../ReactContext/context";
import Sidemenu from "../sidemenu";

import "boxicons";

// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { Environment, OrbitControls } from "@react-three/drei";

const Home = () => {
  const usenavigate = useNavigate();
  const [status, setStatus] = useGlobalContext();
  return (
    <>
      <Headers />
      <div className="videocontainer">
        <video src="bullet.mp4" autoPlay loop muted />
      </div>
      <div className="bodycontainer">
        <div className="Homecontainer">
          <section className="Home">
            <div className="home-content">
              <h1 className="h1 l1">Hello, It's Me</h1>
              <h1 className="h1 name l2">Mallikarjun</h1>

              <h1 className="h1 l3">
                And I'm a
                <span className="span">
                  <Typewriter
                    options={{
                      strings: [
                        "Mern stack Developer",
                        "Frontend Developer",
                        "Backend Developer",
                        "Full stack Developer",
                      ],
                      pauseFor: 1000,
                      deleteSpeed: 50,
                      autoStart: true,
                      delay: 100,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <p className="description">
                A Full-Stack developer is a professional responsible for working
                on both front-end and back-end development processes. They
                design, develop, and maintain fully-fledged and functioning
                platforms with databases or servers. These servers do not need
                other third-party applications to build an entire system from
                scratch
              </p>
              {/* <Canvas camera={{ fov: 18 }}>
                <ambientLight intensity={1.25} />
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
                <Environment preset="sunset" />
                <OrbitControls />
              </Canvas> */}
              <button
                onClick={() => usenavigate("/projects")}
                className="button b1"
              >
                Projects
              </button>
              <button
                onClick={() => usenavigate("/about")}
                className="button b2"
              >
                About
              </button>
            </div>

            <div className="social">
              <img
                className="bird"
                src="https://media.giphy.com/media/Yn4nioYWSZMqiPNVuD/giphy.gif"
              />
              <div className="touch">
                <p className="tag">Catch Me At :-</p>
                <a
                  href="https://www.linkedin.com/in/mallikarjun-godishela84"
                  target="blank"
                >
                  <box-icon
                    border="circle"
                    animation="tada-hover"
                    size="md"
                    name="linkedin"
                    type="logo"
                  ></box-icon>
                </a>
                <a href=" https://github.com/mallikarjun841" target="blank">
                  <box-icon
                    border="circle"
                    animation="tada-hover"
                    size="md"
                    type="logo"
                    name="github"
                  ></box-icon>
                </a>
                <a href="https://wa.me/918328653284" target="blank">
                  <box-icon
                    border="circle"
                    animation="tada-hover"
                    size="md"
                    name="whatsapp"
                    type="logo"
                  ></box-icon>
                </a>

                <a
                  href="https://www.instagram.com/mallikarjun_reddy_84/"
                  target="blank"
                >
                  <box-icon
                    border="circle"
                    animation="tada-hover"
                    size="md"
                    type="logo"
                    name="instagram"
                  ></box-icon>{" "}
                </a>

                <a
                  href="https://www.facebook.com/godisala.mallikarjun"
                  target="blank"
                >
                  <box-icon
                    border="circle"
                    animation="tada-hover"
                    backgroundColor="blue"
                    size="md"
                    type="logo"
                    name="facebook"
                  ></box-icon>
                </a>
              </div>
            </div>
          </section>

          <div className="profile-maincontainer">
            <div className="profile-container">
              <div className="photocontainer"></div>
            </div>
            <div className="image">
              <img className="profile" src="profile.png" alt="profile" />
            </div>
          </div>
        </div>
        <Sidemenu />
      </div>
    </>
  );
};

export default Home;
