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
  Facebook,
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
            <SocialLogo to="/" onClick={toggleHome}>
              Călin Radu
            </SocialLogo>
            Călin Radu © {new Date().getFullYear()} All rights reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="facebook">
              <Facebook />
            </SocialIconLink>
            <SocialIconLink
              href="//www.github.com/CalinRaduAlexandru/"
              target="_blank"
              aria-label="Github"
            >
              <Github />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
              <Linkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
