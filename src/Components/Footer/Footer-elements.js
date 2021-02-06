import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiArrowFromBottom } from "react-icons/bi";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

export const FooterContainer = styled.div`
  background: #23424a;
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
  margin: 48px auto 20px auto;
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-weight: bolt;

  &:hover {
    color: lightblue;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const ArrowFromBottom = styled(BiArrowFromBottom)`
  font-size: 50px;
  margin: 50px 0 0 0;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: lightblue;
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
    color: lightblue;
  }
`;

export const Facebook = styled(FaFacebook)`
  font-size: 50px;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: lightblue;
  }
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 50px;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: lightblue;
  }
`;
