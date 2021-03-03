import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import polygon from "./../../Assets/Polygon.svg";
import PolygonMob from "./../../Assets/PolygonMob.svg";
import TechnologyImg from "./../../Assets/Technology.png";
import "./Hero.styles.css";
import "./../About/About-button.styles.css";
import {
  HeroBg,
  Container,
  ImgBg,
  MobileBg,
  Title,
  Technology,
  HeroContainer,
  RightSide,
  ContactBtnWrapper,
  MdQuote,
  Motto,
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
      <MobileBg alt="programming setup" src={PolygonMob} />
      <HeroBg>
        <Title>
          <Tilt>Ra Web Development</Tilt>
        </Title>
        <Technology alt="programming setup" src={TechnologyImg} />
        <Container>
          <ImgBg alt="programming setup" src={polygon} />
        </Container>
        <RightSide>
          <Motto>
            <MdQuote />
            Thriving for excellence in your business as it would be mine!
          </Motto>
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
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="text">
                Contact me! {hover ? <ArrowForward /> : <ArrowRight />}
              </div>
            </div>
          </ContactBtnWrapper>
        </RightSide>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
