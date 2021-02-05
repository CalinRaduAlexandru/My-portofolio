import React, { useState } from "react";
import setup from "./../../Assets/setup.jpg";
import { Button } from "../Button-element";
import {
  HeroBg,
  ImgBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
  ArrowForward,
} from "./Hero-elements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <ImgBg alt="programming setup" src={setup} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to my portofolio!</HeroH1>
        <HeroH2>Călin Radu</HeroH2>
        <HeroP>full-stack developer</HeroP>
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
            primary="true"
            dark="true"
          >
            Contact me! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
