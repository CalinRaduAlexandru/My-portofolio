import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { HiOutlineMail } from "react-icons/hi";
import { BiDownArrowAlt } from "react-icons/bi";
import { MainGradient } from "../../App-variables";

export const ProfileContainer = styled.div``;

export const ProfileBg = styled.img`
  width: 400px;
  height: auto;
  position: absolute;
  bottom: 16%;
  right: 13%;
  animation: slide-left 2s;

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

  @media (max-width: 720px) {
    width: 250px;
    right: 30%;
  }
`;

export const ContactBtnWrapper = styled(LinkS)`
  display: flex;
  border-radius: 5px;
  justify-content: center;
  background: ${MainGradient};
  color: white;
  cursor: pointer;
  padding: 12.5px 15px;
  max-width: 150px;
`;

export const ArrowForward = styled(HiOutlineMail)`
  margin-left: 8px;
  font-size: 20px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 300px) {
    font-size: 20px;
  }
`;

export const ArrowRight = styled(BiDownArrowAlt)`
  margin-left: 8px;
  font-size: 20px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 300px) {
    font-size: 20px;
  }
`;
