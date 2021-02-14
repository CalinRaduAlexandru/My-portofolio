import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import laptop from "./../../Assets/setup.jpg";
import {
  HeroBg,
  ImgBg,
  HeroContainer,
  HeroContent,
  UpperBlock,
  TitleWrapper,
  HeroH1,
  HeroH2,
  HeroH3,
  DownBlock,
  HeroPWrap,
  HeroP,
  HeroBtnWrapper,
  HeroButton,
  ArrowRight,
  ArrowForward,
} from "./Hero-elements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    setTimeout(() => setBackground(true), 3000);
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
          <UpperBlock>
            <HeroH1>Welcome!</HeroH1>
            <Tilt>
              <TitleWrapper>
                <HeroH2>Ra</HeroH2>
                <HeroH3>WEB DEVELOPMENT</HeroH3>
              </TitleWrapper>
            </Tilt>
          </UpperBlock>
          <DownBlock>
            <HeroPWrap>
              <HeroP>
                Thriving for excellence in your business as it would be mine!
              </HeroP>
            </HeroPWrap>
            <HeroBtnWrapper>
              <HeroButton
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              >
                Tell me how can I help you!{" "}
                {hover ? <ArrowForward /> : <ArrowRight />}
              </HeroButton>
            </HeroBtnWrapper>
          </DownBlock>
        </HeroContent>
      )}
    </HeroContainer>
  );
};

export default HeroSection;
