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
      <div class="animation01">
        <div class="rhombus_small">
          <div class="rhombus">
            <div class="border_box">
              <span class="line line01"></span>
              <span class="line line02"></span>
              <span class="line line03"></span>
              <span class="line line04"></span>
              <span class="circle circle01"></span>
              <span class="circle circle02"></span>
              <span class="circle circle03"></span>
              <span class="circle circle04"></span>
              <span class="animation_line animation_line01"></span>
              <span class="animation_line_wrapper animation_line02_wrapper">
                <span class="animation_line animation_line02"></span>
              </span>
              <span class="animation_line animation_line03"></span>
              <span class="animation_line_wrapper animation_line04_wrapper">
                <span class="animation_line animation_line04"></span>
              </span>
              <span class="animation_line animation_line05"></span>
              <span class="animation_line_wrapper animation_line06_wrapper">
                <span class="animation_line animation_line06"></span>
              </span>
              <span class="animation_line animation_line07"></span>
              <span class="animation_line_wrapper animation_line08_wrapper">
                <span class="animation_line animation_line08"></span>
              </span>
            </div>
            <div class="wave">
              <div class="wave_wrapper">
                <div class="wave_box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="animation02">
        <div class="rhombus_box">
          <span class="rhombus_item_wrapper rhombus_item01_wrapper">
            <span class="rhombus_item"></span>
          </span>
          <span class="rhombus_item_wrapper rhombus_item02_wrapper">
            <span class="rhombus_item"></span>
          </span>
        </div>
        <div class="double_content">
          <div class="double_wrapper02 dotted02">
            <div class="dotted_hide">
              <div class="double_wrapper01 dotted01">
                <span class="dotted_right"></span>
              </div>
            </div>
          </div>
          <div class="double_wrapper02 white02">
            <div class="double_wrapper01 white01"></div>
          </div>
          <div class="double_wrapper02 gray02">
            <div class="double_wrapper01 gray01"></div>
          </div>
          <div class="double_wrapper02 orange02">
            <div class="double_wrapper01 orange01"></div>
          </div>
        </div>
        <div class="name">
          <p></p>
          <span class="name_circle01"></span>
          <span class="name_circle02"></span>
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
