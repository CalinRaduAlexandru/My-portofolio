import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import laptop from "./../../Assets/laptop.jpg";
import "./Hero.styles.css";
import {
  HeroBg,
  ImgBg,
  HeroContainer,
  HeroContent,
  TitleWrapper,
  HeroH1,
  HeroH2,
  // HeroH3,
  HeroPWrap,
  HeroP,
  HeroBtnWrapper,
  HeroButton,
  ArrowRight,
  ArrowForward,
} from "./Hero-elements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    setTimeout(() => setBackground(true), 3000);
  }, []);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <ImgBg alt="programming setup" src={laptop} />
      </HeroBg>
      <div className="animation01">
        <div className="rhombus_small">
          <div className="rhombus">
            <div className="border_box">
              <span className="line line01"></span>
              <span className="line line02"></span>
              <span className="line line03"></span>
              <span className="line line04"></span>
              <span className="circle circle01"></span>
              <span className="circle circle02"></span>
              <span className="circle circle03"></span>
              <span className="circle circle04"></span>
              <span className="animation_line animation_line01"></span>
              <span className="animation_line_wrapper animation_line02_wrapper">
                <span className="animation_line animation_line02"></span>
              </span>
              <span className="animation_line animation_line03"></span>
              <span className="animation_line_wrapper animation_line04_wrapper">
                <span className="animation_line animation_line04"></span>
              </span>
              <span className="animation_line animation_line05"></span>
              <span className="animation_line_wrapper animation_line06_wrapper">
                <span className="animation_line animation_line06"></span>
              </span>
              <span className="animation_line animation_line07"></span>
              <span className="animation_line_wrapper animation_line08_wrapper">
                <span className="animation_line animation_line08"></span>
              </span>
            </div>
            <div className="wave">
              <div className="wave_wrapper">
                <div className="wave_box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animation02">
        <div className="rhombus_box">
          <span className="rhombus_item_wrapper rhombus_item01_wrapper">
            <span className="rhombus_item"></span>
          </span>
          <span className="rhombus_item_wrapper rhombus_item02_wrapper">
            <span className="rhombus_item"></span>
          </span>
        </div>
        <div className="double_content">
          <div className="double_wrapper02 dotted02">
            <div className="dotted_hide">
              <div className="double_wrapper01 dotted01">
                <span className="dotted_right"></span>
              </div>
            </div>
          </div>
          <div className="double_wrapper02 white02">
            <div className="double_wrapper01 white01"></div>
          </div>
          <div className="double_wrapper02 gray02">
            <div className="double_wrapper01 gray01"></div>
          </div>
          <div className="double_wrapper02 orange02">
            <div className="double_wrapper01 orange01"></div>
          </div>
        </div>
        <div className="name">
          <p></p>
          <span className="name_circle01"></span>
          <span className="name_circle02"></span>
        </div>
      </div>
      {background && (
        <HeroContent>
          <HeroH1>Welcome!</HeroH1>
          <Tilt>
            <TitleWrapper>
              <HeroH2>Ra Web-Dev</HeroH2>
            </TitleWrapper>
          </Tilt>
          <HeroPWrap>
            <HeroP>
              Thriving for excellence in your business as it would be mine!
            </HeroP>
          </HeroPWrap>
          <HeroBtnWrapper>
            <HeroButton
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Tell me how can I help you!{" "}
              {hover ? <ArrowForward /> : <ArrowRight />}
            </HeroButton>
          </HeroBtnWrapper>
        </HeroContent>
      )}
    </HeroContainer>
  );
};

export default HeroSection;
