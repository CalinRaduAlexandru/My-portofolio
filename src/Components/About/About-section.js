import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import Radu_Calin_Resume from "./../../Assets/Radu_Calin_Resume.PDF";
import { ArrowRight, ArrowForward } from "../Hero/Hero-elements";
import "./About-button.styles.css";
import ParticlesComp from "./../../SingleComponent/Particles/Particles.js";

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
  HeroP,
} from "./About-elements";

const AboutSection = () => {
  const [hover, setHover] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const onHover = () => {
    setHover(!hover);
  };

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                  Radu Călin | Full-stack <br /> Web & Mobile Developer
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
            </Column1>
            <Column2>
              <TextWrapper data-aos="fade-left">
                <TopLine>Excited to bring life to your project!</TopLine>
                <Heading>
                  Creative, proactive and passionate about my work
                </Heading>
                <Subtitle>
                  Let`s discover and build new possibilities in which we can
                  expand your vision!
                </Subtitle>
              </TextWrapper>
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
                <div
                  className="svg-wrapper"
                  style={{ transform: `translateY(${offsetY * 0.03}px)` }}
                >
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
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
