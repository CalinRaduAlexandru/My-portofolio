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
          <SocialLogo onClick={toggleHome}>Radu Călin</SocialLogo>
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
      <WebsiteRights>
        Călin Radu © {new Date().getFullYear()} All rights reserved.
      </WebsiteRights>
    </FooterContainer>
  );
};

export default Footer;
