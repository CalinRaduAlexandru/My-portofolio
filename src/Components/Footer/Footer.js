import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ArrowFromBottom,
  GoUp,
  Github,
  Linkedin,
} from "./Footer-elements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <ArrowFromBottom onClick={toggleHome} />
      <GoUp onClick={toggleHome}>Go top!</GoUp>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>
            <SocialLogo onClick={toggleHome}>Călin Radu</SocialLogo>
            Călin Radu © {new Date().getFullYear()} All rights reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="//www.github.com/CalinRaduAlexandru/"
              target="_blank"
              aria-label="Github"
            >
              <Github />
            </SocialIconLink>
            <SocialIconLink>
              <Linkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
