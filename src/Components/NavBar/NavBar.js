import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Tilt from "react-parallax-tilt";
import { FaBars } from "react-icons/fa";
import cloud from "./../../Assets/cloud-computing.png";

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
          <NavLogo onClick={toggleHome}>
            {scrollNav ? (
              <img
                alt="logo"
                src={cloud}
                width="30px"
                height="30px"
                style={{ marginRight: "10px" }}
              />
            ) : null}
            Radu C.
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
