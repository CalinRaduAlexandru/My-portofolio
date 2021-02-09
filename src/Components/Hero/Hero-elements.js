import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    z-index: 2;
    width: 120vw;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
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
  background: rgb(43, 179, 172);
  background: linear-gradient(
    90deg,
    rgba(43, 179, 172, 1) 29%,
    rgba(47, 198, 186, 0.4514180672268907) 56%,
    rgba(43, 179, 172, 1) 84%
  );
  opacity: 0.6;
  z-index: 1;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.3);
  padding: 20px 30px 35px 140px;
  border-radius: 25px;
  background: rgba(0, 35, 149, 0.7);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    background: rgba(0, 35, 149, 0.9);
  }
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
  @media screen and (max-width: 500px) {
    padding: 10px 20px 20px 90px;
  }
`;

export const HeroH1 = styled.h1`
  color: black;
  font-family: "Dancing Script", cursive;
  bottom-border: 2px solid black;
  font-size: 48px;
  text-align: center;
  padding: 20px 0;
  animation: slide-up 2s;
  @keyframes slide-up {
    from {
      margin-top: 50%;
      width: 200%;
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
  position: absolute;
  color: black;
  font-family: "Allura", cursive;
  font-size: 120px;
  top: 0%;
  left: 5%;
  letter-spacing: 1.9px;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 78px;
    top: 0%;
    left: 5%;
  }
`;
// #002395;

export const HeroH3 = styled.h2`
  color: #551a8b;
  padding: 10px 10px 0 10px;
  border-radius: 25px;
  background: rgba(0, 0, 0, 0.8);
  text-shadow: 2px 0 black;
  opacity: 0.8;
  font-family: "Spartan", sans-serif;
  font-size: 60px;
  font-weight: 600;
  letter-spacing: 1.9px;
  text-align: center;
  margin: 17px 0 0 0;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

export const HeroP = styled.p`
  margin-top: 40px;
  font-family: "Spartan", sans-serif;
  color: black;
  font-size: 27px;
  text-align: center;
  max-width: 700px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
