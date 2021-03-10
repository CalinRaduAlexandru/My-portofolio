import React, { useState } from "react";
import phone from "./../../Assets/phone.png";
import { Project } from "../../SingleComponent/Project-component/Project-component";
import { SlideData } from "./DataPhoneView";

import {
  PhoneWrapper,
  PhoneMockWrapper,
  PhoneMock,
  SlideWrapper,
  ProjectSlide,
  BlackCover,
  Div,
  Gif,
  Title,
  ProjectImg,
  ProjectWrapper,
  LeftArrow,
  RightArrow,
} from "./PhoneSlides-elements.js";

const PhoneSlides = () => {
  const [current, setCurrent] = useState(0);
  const length = SlideData.length;

  const PrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const NextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(NextSlide);
  };
  return (
    <PhoneWrapper>
      <LeftArrow onClick={PrevSlide} />
      <PhoneMockWrapper>
        <PhoneMock src={phone} alt="phone" />
        <SlideWrapper>
          <BlackCover />
          {SlideData.map((slide, idx) => {
            return (
              <ProjectSlide key={idx}>
                {idx === current && (
                  <Div>
                    <ProjectImg src={slide.logo} />
                    <Title>{slide.title}</Title>
                    <Gif src={slide.gif} />
                    <ProjectWrapper>
                      <Project
                        subtitle={slide.subtitle}
                        text={slide.text}
                        websiteRef={slide.websiteRef}
                        githubRef={slide.githubRef}
                      />
                    </ProjectWrapper>
                  </Div>
                )}
              </ProjectSlide>
            );
          })}
        </SlideWrapper>
      </PhoneMockWrapper>
      <RightArrow onClick={NextSlide} />
    </PhoneWrapper>
  );
};

export default PhoneSlides;
