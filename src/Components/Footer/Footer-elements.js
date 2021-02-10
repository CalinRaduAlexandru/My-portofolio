import styled from "styled-components";
import { BiArrowFromBottom } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export const FooterContainer = styled.div`
  background: #010606;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  padding: 0px 20px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 15px auto 15px auto;
  background: #1a2228;
  border-radius: 25px;
  padding: 5px 0;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

export const SocialLogo = styled.div`
  color: #0077b6;
  font-family: "Allura", cursive;
  cursor: pointer;
  text-decoration: none;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  &:hover {
    color: #00b4d8;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  color: #00b4d8;
  font-size: 24px;
`;

export const ArrowFromBottom = styled(BiArrowFromBottom)`
  font-size: 50px;
  margin: 10px 0 0 0;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #00b4d8;
  }
`;

export const GoUp = styled.p`
  font-size: 16px;
  cursor: pointer;
  color: #fff;
`;
export const DetailsWrap = styled.div`
  color: #fff;
  padding: 10px 25px 10px 25px;
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
export const PhoneWrap = styled.div`
  padding: 5px;
`;
export const Whatsapp = styled(SiWhatsapp)``;
export const EmailWrap = styled.div`
  padding: 5px;
  display: flex;
`;
export const OutlineMail = styled(HiOutlineMail)`
  font-size: 20px;
  margin-right: 7px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }

  @media screen and (max-width: 300px) {
    display: none;
  }
`;

export const Github = styled(FaGithub)`
  font-size: 50px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 50px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;
