import styled from "styled-components";
import { BiArrowFromBottom } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FooterGradient } from "../../App-variables";

export const FooterContainer = styled.div`
  background: ${FooterGradient};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMedia = styled.section`
  margin: 0px auto;
  padding: 25px 50px 0 50px;
  align-self: center;
  width: 100vw;
  background: linear-gradient(180deg, #1c2bb3 0%, #3619aa 100%);
  z-index: 2;
  border-top-left-radius: 40% 30%;
  border-top-right-radius: 40% 30%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
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
    color: #fff;
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
    color: #3014a3;
  }
`;

export const GoUp = styled.p`
  font-size: 12px;
  cursor: pointer;
  color: #fff;
  margin-bottom: 10px;
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
export const PhoneWrap = styled.div`
  font-family: "Montserrat", sans-serif;
`;
export const Whatsapp = styled(SiWhatsapp)`
  margin-right: 3px;
`;
export const EmailWrap = styled.div`
  display: flex;
  margin: 10px 0;
  font-family: "Montserrat", sans-serif;
`;
export const OutlineMail = styled(HiOutlineMail)`
  font-size: 20px;
  margin-right: 7px;
  margin-top: -1px;
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
  color: #cacde6;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 40px;
  margin: 10px;
  cursor: pointer;
  color: #cacde6;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const WebsiteRights = styled.small`
  color: #e2f0fc;
  padding: 10px 0;
`;
