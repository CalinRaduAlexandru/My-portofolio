import React, { useState } from "react";
import "aos/dist/aos.css";
import Radu_Calin_Resume from "./../../Assets/Radu_Calin_Resume.pdf";
import { ArrowRight, ArrowForward } from "../Hero/Hero-elements";
import "./About-button.styles.css";
import LaptopNerd from "./../../Assets/LaptopNerd.png";
import "./About.styles.css";

import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  VideoWrapper,
  TextWrapper,
  TopLine,
  Heading,
  ContactBtnWrapperSecondary,
  BtnWrap,
  BtnResume,
  Download,
  Column2,
  ImgWrapper,
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
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <ImgWrapper>
                <VideoWrapper>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/gFIcgp9fQl4"
                    title="Radu Călin`s Portfolio"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </VideoWrapper>
                <HeroP>
                  <p className="heroP left">&#8220;</p>
                  There are no problems, only functions!{" "}
                  <p className="heroP right">&#8221;</p>
                </HeroP>
              </ImgWrapper>
            </Column1>
            <Column2>
              <TextWrapper data-aos="fade-left">
                <img src={LaptopNerd} className="LaptopNerd" alt="LaptopNerd" />
                <TopLine>Excited to bring life to your project!</TopLine>
                <Heading>
                  Creative, proactive and passionate about my work
                </Heading>
              </TextWrapper>

              <BtnWrap>
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
                <BtnResume
                  href={Radu_Calin_Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                  <Download />
                </BtnResume>
              </BtnWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
