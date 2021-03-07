import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import Radu_Calin_Resume from "./../../Assets/Radu_Calin_Resume.PDF";
import { ArrowRight, ArrowForward } from "../Hero/Hero-elements";
import "./About-button.styles.css";
import "./Collaborate.styles.css";
import HelloAustronaut from "./../../Assets/HelloAustronaut.svg";
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
  const [offsetY, setOffsetY] = useState(0);
  const onHover = () => {
    setHover(!hover);
  };

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    gsap.to(".hello-austronaut", {
      duration: 20,
      rotation: 360,
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AboutContainer id={id}>
        <ParticlesComp />
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper data-aos="fade-up">
                <TopLine>Excited to bring life to your project!</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  Let`s discover and build new possibilities in which we can
                  expand your vision!
                </Subtitle>
              </TextWrapper>
              <div className="collaborate">
                <div
                  className="collab-text"
                  onClick={() =>
                    gsap.to(".bubble, .hello-austronaut", {
                      duration: 3,
                      rotate: 720,
                      ease: "ease-in-out",
                    })
                  }
                >
                  <div className="first-row">
                    <div className="bubble x1">
                      <h1>L</h1>
                    </div>
                    <div className="bubble x2">
                      <h1>E</h1>
                    </div>
                    <div className="bubble x3">
                      <h1>T</h1>
                    </div>
                    <div className="bubble x4">
                      <h1>`</h1>
                    </div>
                    <div className="bubble x5">
                      <h1>S</h1>
                    </div>
                    <img
                      src={HelloAustronaut}
                      alt="austronaut"
                      width="150px"
                      height="150px"
                      className="hello-austronaut"
                      onClick={() =>
                        gsap.to(".bubble, .hello-austronaut", {
                          duration: 3,
                          rotation: 720,
                          ease: "ease-in-out",
                        })
                      }
                    />
                  </div>
                  <div className="second-row">
                    <div className="bubble x6">
                      <h1>C</h1>
                    </div>
                    <div className="bubble x7">
                      <h1>O</h1>
                    </div>
                    <div className="bubble x8">
                      <h1>L</h1>
                    </div>
                    <div className="bubble x9">
                      <h1>L</h1>
                    </div>
                    <div className="bubble x10">
                      <h1>A</h1>
                    </div>
                    <div className="bubble x11">
                      <h1>B</h1>
                    </div>
                  </div>
                </div>
              </div>
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
            </Column1>
            <Column2 data-aos="fade-right">
              <ImgWrap>
                <iframe title="music" width="420" height="315" src=""></iframe>
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
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
