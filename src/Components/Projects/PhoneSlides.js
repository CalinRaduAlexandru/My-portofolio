import React, { useState } from "react";
import phone from "./../../Assets/phone.png";
import {
  PhoneWrapper,
  PhoneMockWrapper,
  PhoneMock,
  SlideWrapper,
  ProjectSlide,
  BlackCover,
  Title,
  ProjectImg,
  LeftArrow,
  RightArrow,
} from "./PhoneSlides-elements.js";

const PhoneSlides = () => {
  const [current, setCurrent] = useState(1);
  const slides = [
    {
      title: "Crownfeel",
      subtitle: "img1",
    },
    { title: "Searchtest", subtitle: "img2" },
  ];
  const length = slides.length;

  const PrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const NextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <PhoneWrapper>
      <LeftArrow onClick={PrevSlide} />
      <PhoneMockWrapper>
        <PhoneMock src={phone} alt="phone" />
        <SlideWrapper>
          <BlackCover />
          {slides.map((slide, idx) => {
            return (
              <ProjectSlide key={idx}>
                {idx === current && (
                  <>
                    <Title>{slide.title}</Title>

                    <ProjectImg>{slide.subtitle}</ProjectImg>
                  </>
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
