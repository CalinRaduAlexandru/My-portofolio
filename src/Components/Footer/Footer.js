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
  DetailsWrap,
  PhoneWrap,
  Whatsapp,
  EmailWrap,
  OutlineMail,
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
          <DetailsWrap>
            <PhoneWrap>
              <Whatsapp /> +40 742804731
            </PhoneWrap>
            <EmailWrap>
              <OutlineMail /> CalinRaduAlexandru@protonmail.com
            </EmailWrap>
          </DetailsWrap>
          <SocialIcons>
            <SocialIconLink
              href="//www.github.com/CalinRaduAlexandru/"
              target="_blank"
              aria-label="Github"
            >
              <Github />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/radu-c%C4%83lin-485606204/"
              target="_blank"
              aria-label="Github"
            >
              <Linkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
      <WebsiteRights>Călin Radu © 2021 All rights reserved.</WebsiteRights>
    </FooterContainer>
  );
};

export default Footer;
