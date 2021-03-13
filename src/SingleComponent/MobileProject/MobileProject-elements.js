import styled from "styled-components";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export const MobileProjectContainer = styled.div`
  margin: 20px 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const ProjectSlide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrap = styled.div`
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
`;

export const TitleArrowWrap = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
`;

export const Title = styled.div`
  font-size: 24px;
  margin: 0 10px;
  color: #fff;
  cursor: default;
`;

export const Gif = styled.img`
  position: relative;
  z-index: 10;
  border-radius: 20px;
  width: 85vw;
  margin: 15px 0;
  max-width: 400px;
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
  position: relative;
  width: 300px;
  margin-left: 30px;
  animation: appear 0.2s;
  justify-self: flex-end;
`;

export const LeftArrow = styled(FaArrowCircleLeft)`
  font-size: 40px;
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
  cursor: pointer;
  color: #00b4d8;
  transition: ease-in-out 0.2s;
  &:hover {
    color: #0077b6;
    transform: scale(1.05);
  }
`;

export const BgCloud = styled.img`
  z-index: -1;
  position: absolute;
  left: -45px;
  bottom: -175px;
`;
