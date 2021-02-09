import styled from "styled-components";
import { BiArrowFromBottom } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const FooterContainer = styled.div`
  background: #010606;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 48px auto 30px auto;
`;

export const SocialLogo = styled.div`
  color: #002395;
  font-family: "Allura", cursive;
  cursor: pointer;
  text-decoration: none;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-weight: bold;
  &:hover {
    color: #00b4d8;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
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
  margin: 50px 0 0 0;
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
