import styled from "styled-components";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export const PhoneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PhoneMockWrapper = styled.div`
  position: relative;
  z-index: 20;
`;

export const SlideWrapper = styled.div`
  position: absolute;
  top: 26.7%;
  left: -11.22%;
`;

export const PhoneMock = styled.img`
  width: 378px;
  height: 520px;
  transform: rotate(90deg);
`;

export const ProjectSlide = styled.div``;

export const BlackCover = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  border-radius: 20px;
  width: 463px;
  height: 240px;
  background: black;
`;

export const Title = styled.h1`
  position: absolute;
  top: -40%;
  left: 0%;
  font-size: 34px;
  color: #fff;
`;

export const ProjectImg = styled.h1`
  font-size: 20px;
  color: white;
  position: absolute;
  top: 50px;
  /* border-radius: 20px;
  width: 463px;
  height: 240px;
  z-index: -1; */
`;

export const LeftArrow = styled(FaArrowCircleLeft)`
  font-size: 50px;
  margin-right: 100px;
  cursor: pointer;
  color: #1f73ae;
  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
`;

export const RightArrow = styled(FaArrowCircleRight)`
  font-size: 50px;
  margin-left: 100px;
  cursor: pointer;
  color: #1f73ae;
  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
`;
