import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Tilt from "react-parallax-tilt";
import { FaBars } from "react-icons/fa";
import LogoState from "./../../Assets/LogoState.svg";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItemHome,
  NavItemFirst,
  NavItemSecond,
  NavItemThird,
  NavLinks,
} from "./NavBar-Elements";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome} scrollNav={scrollNav}>
            <img
              alt="logo"
              src={LogoState}
              width="50px"
              height="50px"
              style={{ marginRight: "20px" }}
            />
            Radu Călin`s Portfolio
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <Tilt>
              <NavItemHome>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItemHome>
            </Tilt>
            <Tilt>
              <NavItemFirst>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItemFirst>
            </Tilt>
            <Tilt>
              <NavItemSecond>
                <NavLinks
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Projects
                </NavLinks>
              </NavItemSecond>
            </Tilt>
            <Tilt>
              <NavItemThird>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItemThird>
            </Tilt>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
