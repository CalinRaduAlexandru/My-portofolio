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
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 60%
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
  overflow: hidden;
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
  max-width: 1200px;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: appear 2s;
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
  width: 40vw;
  max-width: 400px;
  align-items: center;
  border-radius: 25px;
  background: rgba(30, 152, 217, 0.8);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  animation: slide-left 2s;
  @keyframes slide-left {
    from {
      margin-left: 50%;
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

  @media screen and (max-width: 1020px) {
    width: 90vw;
    max-width: 400px;

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
  color: #033340;
  font-family: "Allura", cursive;
  font-size: 60px;
  letter-spacing: 1.9px;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export const HeroH3 = styled.h2`
  color: #1e98d9;
  width: 40vw;
  max-width: 400px;
  padding: 20px 20px 10px 20px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background: rgba(0, 0, 0, 0.8);
  text-shadow: 2px 0 black;
  opacity: 0.8;
  font-family: "Spartan", sans-serif;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 1.9px;
  text-align: center;

  @media screen and (max-width: 1020px) {
    font-size: 17px;
    padding: 15px 15px 10px 15px;
    width: 90vw;
    max-width: 400px;
  }
`;

export const HeroPWrap = styled.div`
  @media screen and (max-width: 500px) {
    max-width: 60vw;
  }
`;

export const HeroP = styled.p`
  color: black;
  font-size: 16px;
  text-align: center;
  cursor: default;
  font-weight: 600;
  text-shadow: 10px 10px 10px 5px;
  max-width: 350px;
  background: rgba(110, 212, 240, 0.7);
  border-radius: 25px;
  padding: 20px 10px;
  margin: 25px 0 10px 0;
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
    font-size: 14px;
    padding: 10px 20px;
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

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const HeroButton = styled(LinkS)`
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.6);
  white-spate: nowrap;
  padding: 14px 30px;
  color: #a4e3f5;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
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

  @keyframes right {
  }

  @media screen and (max-width: 500px) {
    font-size: 11px;
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
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
