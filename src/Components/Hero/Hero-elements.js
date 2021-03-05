import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { IoMdQuote } from "react-icons/io";

export const HeroContainer = styled.div`
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: #03191f;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`;

export const Title = styled.h1`
  position: absolute;
  font-size: 54px;
  color: white;
  font-family: "Poppins", sans-serif;
  margin-top: 120px;
  margin-left: 50px;
  cursor: default;
  background: yellow;
`;
export const Container = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  background: #05043d;
  bottom: 10%;
  right: 10%;
`;

export const ProfileBg = styled.img`
  width: 350px;
  height: auto;
  position: absolute;
  bottom: 18%;
  right: 15%;
`;

export const MdQuote = styled(IoMdQuote)`
  font-size: 50px;
  color: white;
  margin-right: 10px;
`;

export const Motto = styled.p`
  color: white;
  font-size: 25px;
  max-width: 330px;
  background: green;
  align-self: flex-end;
  margin-right: 100px;
  font-family: "Nunito", sans serif;
  @media (max-width: 1025px) {
  }
`;

export const ContactBtnWrapper = styled(LinkS)`
  position: absolute;
  right: 10%;
  bottom: 15%;
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
