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
  width: 413px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -135px;
  left: -10px;
`;
export const AWrap = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: appear 0.5s;
  text-decoration: none;
`;

export const ProjectImg = styled.img`
  width: 60px;
  font-size: 20px;
  color: white;
  top: -130px;
  left: 210px;
`;

export const Title = styled.div`
  font-size: 34px;
  color: #fff;
  cursor: default;
`;

export const PhoneMock = styled.img`
  width: 318px;
  height: 460px;
  transform: rotate(90deg);
`;

export const BlackCover = styled.div`
  position: absolute;
  top: 4px;
  left: -13px;
  border-radius: 25px;
  width: 417px;
  height: 206px;
  background: black;
`;
export const Gif = styled.img`
  position: absolute;
  top: 139.5px;
  left: 0px;
  border-radius: 20px;
  width: 412px;
  height: 203px;
  animation: appear 0.7s;
  @keyframes appear {
    0% {
      opacity: 0;
    }

    40% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const ProjectWrapper = styled.div`
  width: 300px;
  margin-left: 30px;
  margin-top: 230px;
  animation: appear 0.5s;
`;

export const LeftArrow = styled(FaArrowCircleLeft)`
  font-size: 40px;
  margin-right: 90px;
  cursor: pointer;
  color: #00b4d8;
  transition: ease-in-out 0.2s;
  &:hover {
    color: #0077b6;
    transform: scale(1.05);
  }
`;

export const RightArrow = styled(FaArrowCircleRight)`
  font-size: 40px;
  margin-left: 90px;
  cursor: pointer;
  color: #00b4d8;
  transition: ease-in-out 0.2s;
  &:hover {
    color: #0077b6;
    transform: scale(1.05);
  }
`;

export const BgCloud = styled.img`
  position: absolute;
  z-index: -1;
  left: -12%;
  bottom: -20%;
`;
