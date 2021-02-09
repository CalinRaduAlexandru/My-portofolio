import React, { useState } from "react";
import setup from "./../../Assets/setup.jpg";
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
        <HeroH1>Welcome!</HeroH1>
        <TitleWrapper>
          <HeroH2>Ra</HeroH2>
          <HeroH3>DESIGN</HeroH3>
        </TitleWrapper>
        <HeroP>
          Radu Călin | Full-stack <br /> Web Developer
        </HeroP>
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
          >
            Contact me! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
