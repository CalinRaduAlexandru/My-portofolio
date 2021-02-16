import styled from "styled-components";
import { HiDownload } from "react-icons/hi";
import { Link as LinkS } from "react-scroll";

export const AboutContainer = styled.div`
  color: #fff;
  position: relative;
  padding: 50px 0;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

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
  display: grid;
  margin: 40px;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 15px 20px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #0077b6;
  padding: 5px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: 50px;
  margin-bottom: 16px;

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
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

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
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ContactBtnWrapper = styled(LinkS)`
  overflow: hidden;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const BtnResume = styled.a`
  background: white;
  border-radius: 50px;
  background: #00b4d8;
  white-spate: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: black;
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
    background: #0077b6;
  }
`;

export const Download = styled(HiDownload)`
  margin-left: 10px;
`;

export const ImgWrap = styled.div`
  max-width: 405px;
  min-height: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const Img = styled.img`
  width: 80%;
  border-radius: 50%;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroP = styled.p`
  margin: 20px 0;
  font-family: "Spartan", sans-serif;
  color: white;
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
