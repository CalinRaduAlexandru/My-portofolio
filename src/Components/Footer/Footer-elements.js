import styled from "styled-components";
import { BiArrowFromBottom } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FooterGradient, BlackGradient } from "../../App-variables";

export const FooterContainer = styled.div`
  background: ${FooterGradient};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMedia = styled.section`
  margin: 25px 0;
  padding: 25px 50px;
  align-self: center;
  background: ${BlackGradient};
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  z-index: 2;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
`;

export const SocialLogo = styled.div`
  color: #e2f0fc;
  cursor: pointer;
  text-decoration: none;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 20px;
  &:hover {
    color: #80abff;
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
  z-index: 3;
  &:hover {
    color: #0057ff;
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
  margin: 10px 0;
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
  color: #80abff;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 40px;
  margin: 10px;
  cursor: pointer;
  color: #80abff;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const WebsiteRights = styled.small`
  color: #e2f0fc;
  padding: 10px 0;
`;
