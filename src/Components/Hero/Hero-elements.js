import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const ProfileContainer = styled.div`
  width: 330px;
  height: 330px;
  position: absolute;
  background: #05043d;
  border-radius: 50%;
  bottom: 5%;
  right: 10%;

  @media (max-width: 1250px) {
    width: 250px;
    height: 250px;
    right: 5%;
  }
`;

export const ProfileBg = styled.img`
  width: 350px;
  height: auto;
  position: absolute;
  bottom: 18%;
  right: 15%;
  animation: slide-left 2s;

  @media (max-height: 720px) {
    width: 250px;
    right: 30%;
  }
`;

export const ContactBtnWrapper = styled(LinkS)`
  position: absolute;
  right: 10%;
  bottom: 15%;
  animation: slide-left 2s;
  @keyframes slide-left {
    0% {
      margin-right: -650px;
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      margin-right: 0px;
      opacity: 1;
    }
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
