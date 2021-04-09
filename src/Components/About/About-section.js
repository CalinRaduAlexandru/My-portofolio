import React, { useState } from "react";
import "aos/dist/aos.css";
import Radu_Calin_Resume from "./../../Assets/Radu_Calin_Resume.PDF";
import { ArrowRight, ArrowForward } from "../Hero/Hero-elements";
import "./About-button.styles.css";
import ParticlesComp from "./../../SingleComponent/Particles/Particles.js";
import LaptopNerd from "./../../Assets/LaptopNerd.png";

import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ContactBtnWrapperSecondary,
  BtnWrap,
  BtnResume,
  Download,
  Column2,
  ImgWrap,
  HeroP,
} from "./About-elements";

const AboutSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <AboutContainer id="about">
        <ParticlesComp />
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <ImgWrap>
                <iframe
                  title="spaceship"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/v8zkBEcbkJ8"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <HeroP>
                  <Subtitle>
                    Let`s discover and build new possibilities in which we can
                    expand your vision!
                  </Subtitle>
                </HeroP>
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper data-aos="fade-left">
                <img src={LaptopNerd} className="LaptopNerd" alt="LaptopNerd" />
                <TopLine>Excited to bring life to your project!</TopLine>
                <Heading>
                  Creative, proactive and passionate about my work
                </Heading>
              </TextWrapper>
              <div style={{ display: "flex" }}>
                <ContactBtnWrapperSecondary
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
                </ContactBtnWrapperSecondary>
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
              </div>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
