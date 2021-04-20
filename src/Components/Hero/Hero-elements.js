import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { HiOutlineMail } from "react-icons/hi";
import { BiDownArrowAlt } from "react-icons/bi";

export const ProfileContainer = styled.div``;

export const ProfileBg = styled.img`
  width: 550px;
  height: auto;
  position: absolute;
  bottom: 20%;
  right: 10%;
  animation: slide-left 2s;
  z-index: -1;

  @keyframes slide-left {
    0% {
      margin-right: -100px;
      opacity: 0;
    }
    100% {
      margin-right: 0px;
      opacity: 1;
    }
  }
  @media (max-width: 1020px) {
    bottom: 50%;
  }

  @media (max-width: 800px) {
    width: 220px;
    right: 30%;
    bottom: 40%;
  }

  @media (max-width: 450px) {
    right: 22%;
  }
`;

export const ContactBtnWrapper = styled(LinkS)`
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: bold;
  border-radius: 25px;
  justify-content: center;
  background: white;
  color: #4251d8;
  cursor: pointer;
  padding: 15px 25px 12.5px 25px;
  width: 200px;
  transition: 0.1s ease-in-out;
  &:hover {
    transition: 0.1s ease-in-out;
    transform: scale(1.1);
  }
`;

export const ArrowForward = styled(HiOutlineMail)`
  margin-left: 12px;
  font-size: 25px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 300px) {
    font-size: 20px;
  }
`;

export const ArrowRight = styled(BiDownArrowAlt)`
  margin-left: 12px;
  font-size: 25px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 300px) {
    font-size: 20px;
  }
`;
