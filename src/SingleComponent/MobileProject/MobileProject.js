import React, { useState } from "react";
import { SlideData } from "./../../Components/Projects/DataPhoneView.js";
import { Project } from "../Project-component/Project-component";
import cloud from "./../../Assets/BgProjectCloud.svg";
import {
  MobileProjectContainer,
  ProjectSlide,
  Div,
  Wrap,
  Gif,
  TitleArrowWrap,
  Title,
  ProjectImg,
  ProjectWrapper,
  LeftArrow,
  RightArrow,
  BgCloud,
} from "./MobileProject-elements.js";

const MobileProject = () => {
  const [current, setCurrent] = useState(0);
  const length = SlideData.length;

  const PrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const NextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <MobileProjectContainer>
      {SlideData.map((slide, idx) => {
        return (
          <ProjectSlide key={idx}>
            {idx === current && (
              <Div>
                <Wrap
                  href={slide.websiteRef}
                  target="_blank"
                  aria-label="project site"
                >
                  <ProjectImg src={slide.logo} />
                  <Gif src={slide.gif} />
                  <TitleArrowWrap>
                    <LeftArrow onClick={PrevSlide} />
                    <Title>{slide.title}</Title>
                    <RightArrow onClick={NextSlide} />
                    <BgCloud src={cloud} alt="cloud" />
                  </TitleArrowWrap>
                  <ProjectWrapper>
                    <Project
                      subtitle={slide.subtitle}
                      text={slide.text}
                      websiteRef={slide.websiteRef}
                      githubRef={slide.githubRef}
                    />
                  </ProjectWrapper>
                </Wrap>
              </Div>
            )}
          </ProjectSlide>
        );
      })}
    </MobileProjectContainer>
  );
};

export default MobileProject;
