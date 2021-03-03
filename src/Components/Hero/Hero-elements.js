import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { IoMdQuote } from "react-icons/io";

export const HeroContainer = styled.div`
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
  background: #03191f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-size: 54px;
  font-weight: 400;
  color: white;
  font-family: "Nunito", sans serif;
  margin-top: 200px;
  z-index: 11;
  position: absolute;
  cursor: default;
  left: 10%;
  top: -5%;

  @media (max-width: 900px) {
    position: static;
    font-size: 30px;
    margin-top: 100px;
  }

  @media (max-width: 500px) {
    margin-top: 120px;
  }
`;

export const Technology = styled.img`
  position: absolute;
  top: 35%;
  left: -70px;
  width: 800px;
  height: 500px;
  z-index: 10;
  filter: contrast(1.15);

  @media (max-width: 1125px) {
    width: 500px;
    height: 300px;
    left: 0;
  }

  @media (max-width: 900px) {
    position: static;
    padding: 0 40px 0 0;
    margin-right: 20px;
  }

  @media (max-width: 500px) {
    width: 80vw;
    height: auto;

    margin: 20px 0 50px 0;
  }
`;

export const Container = styled.div``;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  z-index: 100;
  /* animation: slide-up 2s;
  @keyframes slide-up {
    from {
      margin-bottom: 100%;
      width: 100%;
      opacity: 0;
    }
    to {
      margin-bottom: 0%;
      width: 100%;
      opacity: 1;
    }
  } */
`;

export const MobileBg = styled.img`
  display: none;
  @media (max-width: 900px) {
    display: block;
    position: absolute;
    width: 100%;
    height: 90%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 1;
  }
  @media (max-width: 500px) {
    height: 60%;
  }
`;

export const MdQuote = styled(IoMdQuote)`
  font-size: 50px;
  color: white;
  margin-right: 10px;
`;

export const Motto = styled.p`
  position: absolute;
  right: 9%;
  bottom: 20%;
  color: white;
  font-size: 25px;
  max-width: 330px;
  font-family: "Nunito", sans serif;
  @media (max-width: 900px) {
    position: static;
    z-index: 100;
    color: white;
    margin: -40px 0 -80px 0;
  }
  @media (max-width: 500px) {
    margin: 0 0 -80px 0;
  }
  @media (max-width: 400px) {
    margin: 40px 0 -80px 0;
    font-size: 21px;
  }
`;

export const ContactBtnWrapper = styled(LinkS)`
  position: absolute;
  right: 10%;
  bottom: 0%;

  @media (max-width: 900px) {
    position: static;
    margin-top: -40px;
  }

  @media (max-width: 500px) {
    align-self: center;
  }
  @media (max-width: 400px) {
    margin-left: 45px;
    background: red;
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
