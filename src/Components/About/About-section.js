import React, { useState } from "react";
import "aos/dist/aos.css";
import profile from "./../../Assets/profile.jpg";
import Radu_Calin_Resume from "./../../Assets/Radu_Calin_Resume.PDF";
import { ArrowRight, ArrowForward } from "../Hero/Hero-elements";
import "./About-button.styles.css";
import "./Bubbles.styles.css";

import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ContactBtnWrapper,
  BtnWrap,
  BtnResume,
  Download,
  Column2,
  ImgWrap,
  Img,
  HeroP,
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
            <Column1 data-aos="fade-up">
              <TextWrapper>
                <TopLine>Excited to bring life to your project!</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  Let`s discover and build new possibilities in which we can
                  expand your vision!
                </Subtitle>
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
                  <div className="svg-wrapper">
                    <svg
                      height="60"
                      width="320"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect className="shape" height="60" width="320" />
                    </svg>
                    <div className="text">
                      Contact me! {hover ? <ArrowForward /> : <ArrowRight />}
                    </div>
                  </div>
                </ContactBtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2 data-aos="fade-right">
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
