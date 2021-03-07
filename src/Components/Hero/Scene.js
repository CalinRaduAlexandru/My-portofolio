import React, { useState, useEffect } from "react";
import astronaut from "./../../Assets/astronaut.png";
import planet1 from "./../../Assets/planet1.png";
import planet2 from "./../../Assets/planet2.png";
import rocket from "./../../Assets/rocket.png";
import cloud from "./../../Assets/cloud-computing.png";
import profile from "./../../Assets/BgMinified.png";
import "./Scene.styles.css";
import Title from "../../SingleComponent/Title-component/Title";
import BottomCloud from "./../../Assets/VectorCloud.png";

import {
  ProfileContainer,
  ProfileBg,
  ContactBtnWrapper,
  ArrowRight,
  ArrowForward,
} from "./Hero-elements";
const Parallax = require("parallax-js");

const Scene = () => {
  const [hover, setHover] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const onHover = () => {
    setHover(!hover);
  };

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
    console.log(parallaxInstance);
  }, []);

  return (
    <div className="container" id="home">
      <h1 className="txt">
        <Title />
      </h1>
      <ProfileContainer>
        <ProfileBg alt="Radu Calin" src={profile} />
        <ContactBtnWrapper
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          <div
            className="svg-wrapper"
            style={{ transform: `translateY(${offsetY * 0.05}px)` }}
          >
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="text">
              Contact me! {hover ? <ArrowForward /> : <ArrowRight />}
            </div>
          </div>
        </ContactBtnWrapper>
      </ProfileContainer>
      <ul id="scene">
        <li className="layer" data-depth=".1">
          <img
            alt="cloud"
            src={cloud}
            width="75px"
            height="75px"
            style={{ marginLeft: "50px", marginTop: "10px" }}
          />
        </li>
        <li className="layer" data-depth="1">
          <img src={planet1} alt="planet1" />
        </li>
        <li className="layer moon" data-depth="-1">
          <img src={planet2} alt="planet2" />
        </li>
        <li className="layer" data-depth="2">
          <img src={astronaut} alt="astronaut" />
        </li>
        <li className="layer" data-depth="0.5">
          <img src={rocket} alt="rocket" />
        </li>
      </ul>
      <div className="cloud-left">
        <img src={BottomCloud} alt="cloud" />
      </div>
      <div className="cloud-right">
        <img src={BottomCloud} alt="cloud" />
      </div>
    </div>
  );
};

export default Scene;
