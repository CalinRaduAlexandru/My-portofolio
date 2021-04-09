import styled from "styled-components";
import { HiDownload } from "react-icons/hi";
import { Link as LinkS } from "react-scroll";
import { MainGradient, White } from "../../App-variables";

export const AboutContainer = styled.div`
  color: ${White};
  position: relative;
  padding: 0px;
  background: ${MainGradient};
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    padding: 20px 0 50px 0;
  }

  @media screen and (min-width: 900px) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 44px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 0;
  }
`;

export const AboutRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  margin: 0 60px;
  padding: 0 60px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 5px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media (max-width: 1200px) {
    padding: 40px 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #98c9f4;
  padding: 5px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 16px;
  cursor: default;

  @media screen and (max-width: 480px) {
    line-height: 1.1;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 16px;
  padding: 5px 0;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  cursor: default;
  color: ${White};

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #d9ddde;
  color: #fff;
  cursor: default;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ContactBtnWrapper = styled(LinkS)`
  overflow: hidden;
  margin-top: -50px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const BtnResume = styled.a`
  background: rgb(31, 115, 174);
  background: linear-gradient(
    180deg,
    rgba(31, 115, 174, 1) 0%,
    rgba(97, 175, 231, 1) 100%
  );
  white-spate: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.1s ease-in-out;
    filter: brightness(1.2);
  }
`;

export const Download = styled(HiDownload)`
  margin-left: 10px;
`;

export const ImgWrap = styled.div`
  width: 500px;
  height: 500px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
    z-index: 100;
  }

  @media screen and (max-width: 500px) {
  }
`;

export const Img = styled.img`
  width: 80%;
  margin: 0 0 10px 0;
  padding-right: 0;
  margin-right: 55px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroP = styled.p`
  margin: 20px 0;
  color: white;
  font-size: 27px;
  text-align: center;
  max-width: 700px;
  cursor: default;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
`;
