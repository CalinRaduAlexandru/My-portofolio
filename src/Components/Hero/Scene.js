import React, { useState } from "react";
import profile from "./../../Assets/ProfileBasicPhoto.png";
import profileSmile from "./../../Assets/ProfileSmilePhoto.png";
import "./Scene.styles.css";
import heroGuy from "./../../Assets/hero-guy.png";
import ProfileBGicons from "./../../Assets/ProfileBGicons.png";
import splash from "./../../Assets/splash.png";

import {
  ProfileContainer,
  ProfileBg,
  ContactBtnWrapper,
  ArrowRight,
  ArrowForward,
} from "./Hero-elements";

const Scene = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="container-wrapper">
      <div className="container" id="home">
        <img src={splash} alt="splash" className="splash" />
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
            Contact me! {hover ? <ArrowRight /> : <ArrowForward />}
          </ContactBtnWrapper>
        </div>

        <div className="HeroPolyghon">
          <ProfileContainer>
            {hover ? (
              <ProfileBg alt="Radu Calin" src={profileSmile} />
            ) : (
              <ProfileBg alt="Radu Calin" src={profile} />
            )}
          </ProfileContainer>
          <img
            src={ProfileBGicons}
            alt="programing icons"
            className="staticIcons"
          />{" "}
          <img src={heroGuy} alt="hero-guy" width="100%" className="heroGuy" />
        </div>
      </div>
    </div>
  );
};

export default Scene;
