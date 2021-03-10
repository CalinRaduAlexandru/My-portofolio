import styled from "styled-components";
import { BiArrowFromBottom } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export const FooterContainer = styled.div`
  background: #030226;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMedia = styled.section`
  padding: 0px 20px;
  align-self: center;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
`;

export const SocialLogo = styled.div`
  color: #1f73ae;
  cursor: pointer;
  text-decoration: none;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const ArrowFromBottom = styled(BiArrowFromBottom)`
  font-size: 40px;
  margin: 10px 0 0 0;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #1f73ae;
  }
`;

export const GoUp = styled.p`
  font-size: 12px;
  cursor: pointer;
  color: #fff;
`;
export const DetailsWrap = styled.div`
  color: #fff;
  padding: 0px 0px;
  display: flex;
  flex-direction: column;
  items-align: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }

  @media screen and (max-width: 350px) {
    font-size: 10px;
  }
`;
export const PhoneWrap = styled.div``;
export const Whatsapp = styled(SiWhatsapp)`
  margin-right: 3px;
`;
export const EmailWrap = styled.div`
  display: flex;
`;
export const OutlineMail = styled(HiOutlineMail)`
  font-size: 20px;
  margin-right: 7px;
  margin-top: 2px;
  @media screen and (max-width: 500px) {
    font-size: 17px;
  }

  @media screen and (max-width: 300px) {
    display: none;
  }
`;

export const Github = styled(FaGithub)`
  font-size: 40px;
  margin: 10px;
  cursor: pointer;
  color: #1f73ae;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 40px;
  margin: 10px;
  cursor: pointer;
  color: #1f73ae;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const WebsiteRights = styled.small`
  color: #0d5485;
  padding: 10px 0;
  border-top: 3px solid #05043d;
`;
