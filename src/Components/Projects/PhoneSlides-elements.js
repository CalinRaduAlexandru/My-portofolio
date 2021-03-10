import styled from "styled-components";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export const PhoneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
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

export const ProjectSlide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Div = styled.div`
  width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -135px;
`;

export const ProjectImg = styled.img`
  width: 60px;
  font-size: 20px;
  color: white;
  top: -130px;
  left: 210px;
  /* border-radius: 20px;
width: 463px;
height: 240px;
z-index: -1; */
`;

export const Title = styled.div`
  font-size: 34px;
  color: #fff;
`;

export const PhoneMock = styled.img`
  width: 378px;
  height: 520px;
  transform: rotate(90deg);
`;

export const BlackCover = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  border-radius: 25px;
  width: 463px;
  height: 240px;
  background: black;
`;
export const Gif = styled.img`
  position: absolute;
  top: 133px;
  left: 0%;
  border-radius: 20px;
  width: 465px;
  height: 242px;
  background: black;
`;

export const ProjectWrapper = styled.div`
  width: 300px;
  top: 250px;
  left: 90px;
  margin-top: 250px;
`;

export const LeftArrow = styled(FaArrowCircleLeft)`
  font-size: 50px;
  margin-right: 100px;
  cursor: pointer;
  color: #1f73ae;
  transition: ease-in-out 0.3s;
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
  transition: ease-in-out 0.3s;
  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
`;
