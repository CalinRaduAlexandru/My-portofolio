import React, { useState } from "react";
import profile from "./../../Assets/profile.jpg";
import Radu_Calin_Resume from "./../../Assets/Radu_Calin_Resume.PDF";
import { Button } from "../Button-element";
import { ArrowRight, ArrowForward } from "../Hero/Hero-elements";
import development from "./../../Assets/development.svg";

import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  AboutBtnWrapper,
  BtnWrap,
  BtnResume,
  Download,
  Column2,
  ImgWrap,
  Img,
  HeroP,
  DevelopmentWrapper,
} from "./About-elements";

const AboutSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  alt,
  primary,
  dark,
}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Excited to bring life to your project!</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  Let`s discover and build new possibilities in which we can
                  expand your vision!
                </Subtitle>
                <AboutBtnWrapper>
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
                  <DevelopmentWrapper>
                    <img
                      src={development}
                      alt="development"
                      width="150px"
                      height="150px"
                    />
                  </DevelopmentWrapper>
                </AboutBtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={profile} alt={alt} />
                <HeroP>
                  Radu Călin | Full-stack <br /> Web Developer
                </HeroP>
                <BtnWrap>
                  <BtnResume
                    href={Radu_Calin_Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                    <Download />
                  </BtnResume>
                </BtnWrap>
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
