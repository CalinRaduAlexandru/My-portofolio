import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.4) 60%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.7;
  z-index: 1;
`;

export const HeroContent = styled.div`
  z-index: 3;
  width: 90vw;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: appear 2s;
  @media (min-width: 1248px) {
    width: 50vw;
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  animation-delay: 7s;
  animation: slide-left 2s;
  @keyframes slide-left {
    from {
      margin-left: 100%;
      width: 100%;
      opacity: 0;
    }
    to {
      margin-left: 0%;
      width: 100%;
      opacity: 1;
    }
  }
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 1248px) {
    max-width: 300px;
    padding: 0px 30px 15px;
    font-size: 18px;
    background: #0077b6;

`;

export const HeroH1 = styled.h1`
  color: #fff;
  margin-top: 10px;
  font-family: "Dancing Script", cursive;
  bottom-border: 2px solid black;
  font-size: 45px;
  text-align: center;
  padding: 25px 0;
  cursor: default;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export const HeroH2 = styled.h2`
  color: #fff;
  font-size: 26px;
  letter-spacing: 1.9px;
  font-weight: 400;
  margin-top: 25px;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export const HeroPWrap = styled.div`
  max-width: 400px;
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: center;
  cursor: default;
  font-weight: 600;
  text-shadow: 10px 10px 10px 5px;
  max-width: 350px;
  border-radius: 25px;
  padding: 20px 10px;
  margin: 27px 0 25px 0;
  animation-delay: 7s;
  animation: slide-top 2s;
  @keyframes slide-top {
    from {
      margin-left: 0%;
      width: 100%;
      opacity: 0;
    }
    to {
      margin-left: 0%;
      width: 100%;
      opacity: 1;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
    max-width: 300px;
    padding: 10px 0px;
    border-radius: 15px;
    margin: 15px 0 10px 0;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 5%;
`;

export const HeroButton = styled(LinkS)`
  background: rgba(0, 0, 0, 0.6);
  white-space: nowrap;
  padding: 14px 20px 10px 20px;
  color: #a4e3f5;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  width: 360px;
  animation-delay: 7s;
  animation: appear 2s;
  @keyframes appear {
    from {
      margin-bottom: 0%;
      width: 100%;
      opacity: 0;
    }
    to {
      margin: 0%;
      width: 100%;
      opacity: 1;
    }
  }

  @media screen and (max-width: 800px) {
    font-size: 12px;
    width: 240px;
  }
  @media screen and (max-width: 300px) {
    font-size: 11px;
    width: 240px;
  }

  @media (min-width: 1248px) {
    border-radius: 50px;
  }

  &:hover {
    transition: 0.1s ease-in-out;
    color: black;
    background: rgba(30, 152, 217, 0.9);
    border: none;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 300px) {
    font-size: 20px;
  }
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 300px) {
    font-size: 20px;
  }
`;
