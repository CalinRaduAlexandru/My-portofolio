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
  padding: 0 24px 50px 47px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: slide-up 2s;
  @keyframes slide-up {
    from {
      margin-right: 50%;
      width: 100%;
      opacity: 0;
    }
    to {
      margin-top: 0%;
      width: 100%;
      opacity: 1;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 0 0 50px 12px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  align-items: center;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  background: rgba(0, 35, 149, 0.7);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  animation: slide-left 2s;
  @keyframes slide-left {
    from {
      margin-left: 150%;
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

  @media screen and (max-width: 500px) {
    max-width: 70vw;
  }
`;

export const HeroH1 = styled.h1`
  color: black;
  font-family: "Dancing Script", cursive;
  bottom-border: 2px solid black;
  font-size: 48px;
  text-align: center;
  padding: 20px 0;
  cursor: default;
  animation: slide-down 2s;
  @keyframes slide-down {
    from {
      margin-right: 40%;
      width: 100%;
      opacity: 0;
    }
    to {
      margin-top: 0%;
      width: 100%;
      opacity: 1;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 32px;
  }
`;

export const HeroH2 = styled.h2`
  color: #00b4d8;
  font-family: "Allura", cursive;
  font-size: 60px;
  letter-spacing: 1.9px;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export const HeroH3 = styled.h2`
  color: #0077b6;
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

  @media screen and (max-width: 500px) {
    font-size: 17px;
    padding: 15px;
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
  max-width: 300px;
  background: rgba(102, 153, 204, 0.8);
  border-radius: 25px;
  padding: 20px 10px;
  margin: 25px 0 10px 0;

  @media screen and (max-width: 500px) {
    font-size: 10px;
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
