import React, { useState, useEffect } from "react";
import geometryIcon from "./../../Assets/geometryIcon.png";
import designIcon from "./../../Assets/designIcon.png";
import serverIcon from "./../../Assets/serverIcon.png";
import databaseIcon from "./../../Assets/databaseIcon.png";
import cloud from "./../../Assets/cloud-computing.svg";
import profile from "./../../Assets/BgMinified.png";
import profileSmile from "./../../Assets/BgMinifiedSmile.png";
import "./Scene.styles.css";
import HeroPolyghon from "./../../Assets/HeroPolyghon.svg";

import {
  ProfileContainer,
  ProfileBg,
  ContactBtnWrapper,
  ArrowRight,
  ArrowForward,
} from "./Hero-elements";
const Parallax = require("parallax-js");

const Scene = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const handleScroll = () => setOffsetY(window.pageYOffset);
  console.log(offsetY);

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
    <div className="container-wrapper">
      <div className="container" id="home">
        <div className="heroDetails">
          <h1 className="txt">
            Full-stack <br />
            Web and mobile <br />
            Developer and designer
          </h1>
          <h3 className="heroSubheader">
            Here to bring solutions into your thriving bussiness!{" "}
          </h3>
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
            Contact me! {hover ? <ArrowForward /> : <ArrowRight />}
          </ContactBtnWrapper>
        </div>
        <ProfileContainer>
          {hover ? (
            <ProfileBg alt="Radu Calin" src={profileSmile} />
          ) : (
            <ProfileBg alt="Radu Calin" src={profile} />
          )}
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
          <li className="layer" data-depth="-0.05">
            <img src={designIcon} alt="designIcon" />
          </li>
          <li className="layer moon" data-depth="0.15">
            <img src={serverIcon} alt="serverIcon" />
          </li>
          <li className="layer" data-depth="-0.15">
            <img src={geometryIcon} alt="geometryIcon" />
          </li>
          <li className="layer" data-depth="0.1">
            <img src={databaseIcon} alt="databaseIcon" />
          </li>
        </ul>

        <div className="HeroPolyghon">
          <img src={HeroPolyghon} alt="polygon" />
        </div>
      </div>
    </div>
  );
};

export default Scene;
