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
  position: relative;
  padding: 0 24px 50px 50px;
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

  @media screen and (max-width: 500px) {
    padding: 0 0 50px 15px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  max-width: 500px;
  align-items: center;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3);
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
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);

`;

export const HeroH1 = styled.h1`
  color: black;
  font-family: "Dancing Script", cursive;
  bottom-border: 2px solid black;
  font-size: 52px;
  text-align: center;
  padding: 15px 0;
  cursor: default;

  @media screen and (max-width: 500px) {
    font-size: 43px;
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
  max-width: 500px;
  padding: 20px 20px 10px 20px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background: rgba(0, 0, 0, 0.8);
  text-shadow: 2px 0 black;
  opacity: 0.8;
  font-family: "Spartan", sans-serif;
  font-size: 30px;
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
  font-family: "Spartan", sans-serif;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3);
  color: black;
  font-size: 16px;
  text-align: center;
  cursor: default;
  font-weight: 600;
  text-shadow: 10px 10px 10px 5px;
  max-width: 350px;
  background: rgba(110, 212, 240, 0.9);
  border-radius: 25px;
  padding: 20px 10px;
  margin: 25px 0 10px 0;
  animation: slide-top 2s;
  @keyframes slide-top {
    from {
      margin-left: -100%;
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
  position: absolute;
  bottom: 10%;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const HeroButton = styled(LinkS)`
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.6);
  white-spate: nowrap;
  padding: 12px 30px;
  color: #fff;
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
    transition: 0.2s ease-in-out;
    color: black;
    background: #fff;
    border: 30px solid rgba(0, 0, 0, 0.8);
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
