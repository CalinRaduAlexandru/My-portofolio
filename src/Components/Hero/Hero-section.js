import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import setup from "./../../Assets/setup.jpg";
import laptop from "./../../Assets/laptop.jpg";
import { Button } from "../Button-element";
import {
  HeroBg,
  ImgBg,
  HeroContainer,
  HeroContent,
  TitleWrapper,
  HeroH1,
  HeroH2,
  HeroH3,
  HeroPWrap,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
  ArrowForward,
} from "./Hero-elements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    setTimeout(() => setBackground(true), 1000);
  }, []);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <ImgBg alt="programming setup" src={laptop} />
      </HeroBg>
      {background && (
        <HeroContent>
          <HeroH1>Welcome!</HeroH1>
          <Tilt>
            <TitleWrapper>
              <HeroH2>Ra</HeroH2>
              <HeroH3>WEB DEVELOPMENT</HeroH3>
            </TitleWrapper>
          </Tilt>
          <HeroPWrap>
            <HeroP>
              Thriving for excellence in your business as it would be mine!
            </HeroP>
          </HeroPWrap>
          <HeroBtnWrapper>
            <Button
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              style={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
            >
              Tell me how can I help you!{" "}
              {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      )}
    </HeroContainer>
  );
};

export default HeroSection;
