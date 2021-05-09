import styled from "styled-components";
import { HiDownload } from "react-icons/hi";
import { Link as LinkS } from "react-scroll";
import { HeroGradientReverse, Dark } from "../../App-variables";

export const AboutContainer = styled.div`
  color: black;
  position: relative;
  padding: 0px;
  background: white;
  min-height: 100vh;
  padding: 0 30px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 20px 0 50px 0;
  }

  @media screen and (min-width: 900px) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-height: 900px) {
    min-height: 50vh;
    padding-top: 100px;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 0;
  }
`;

export const AboutRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1600px;
  width: 80vw;
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  margin-right: 100px;

  @media (max-width: 1200px) {
    margin-right: 0;
  }
`;

export const VideoWrapper = styled.div`
  width: 522px;
  height: 294px;

  @media (max-width: 600px) {
    width: 90vw;
  }
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;

  @media (max-width: 1200px) {
    padding: 40px 0;
    margin-top: 100px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 30px;
`;

export const TopLine = styled.p`
  color: ${Dark};
  padding: 5px;
  font-size: 21px;
  font-family: "Montserrat", sans-serif;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 0px;
  cursor: default;

  @media screen and (max-width: 1400px) {
    font-size: 16px;
    line-height: 40px;
  }

  @media screen and (max-width: 480px) {
    line-height: 1.1;
    font-size: 12px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 16px;
  padding: 5px 0;
  font-size: 42px;
  line-height: 1.1;
  font-family: "Playfair Display", sans-serif;
  font-weight: bold;
  cursor: default;
  color: ${Dark};

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const ContactBtnWrapperSecondary = styled(LinkS)`
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  border-radius: 25px;
  justify-content: center;
  background: ${HeroGradientReverse};
  color: white;
  cursor: pointer;
  padding: 15px 25px 12.5px 25px;
  width: 200px;
  transition: 0.1s ease-in-out;
  &:hover {
    transition: 0.1s ease-in-out;
    filter: brightness(1.1);
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 15px 10px 12.5px 10px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BtnResume = styled.a`
  white-spate: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #3014a3;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  transition: 0.1s ease-in-out;

  &:hover {
    transition: 0.1s ease-in-out;
    filter: brightness(0.9);
  }
`;

export const Download = styled(HiDownload)`
  margin-left: 10px;
`;

export const ImgWrapper = styled.div`
  max-width: 500px;
  height: 500px;
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

export const HeroP = styled.div`
  display: flex;
  margin: 20px 0;
  color: ${Dark};
  font-size: 21px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  cursor: default;

  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
  @media screen and (max-width: 500px) {
    /* font-size: 13px; */
  }
`;
