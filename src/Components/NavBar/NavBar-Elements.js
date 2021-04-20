import styled from "styled-components";
import { Link } from "react-scroll";
import { HeroGradientReverse, Light, Dark } from "../../App-variables";

export const Nav = styled.nav`
  position: relative;
  background: ${({ scrollNav }) =>
    scrollNav ? HeroGradientReverse : "transparent"};
  color: ${({ scrollNav }) => (scrollNav ? "White" : "White")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1rem;
  top: 0;
  z-index: 200;
  position: -webkit-sticky;
  position: sticky;
  animation: appear 1s;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  margin: 0 10%;
  position: sticky;

  @media screen and (max-width: 450px) {
    margin: 0 0 0 5%;
  }
`;

export const NavLogo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 21px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ scrollNav }) => (scrollNav ? "#ebebff" : "#ebebff")};

  &:hover {
    transition: 0.2s ease-in-out;
    filter: brightness(1.1);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    color: ${({ scrollNav }) => (scrollNav ? "#ebebff" : "#4d89ff")};
  }
  @media (max-width: 368px) {
    font-size: 14px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${Light};
    animation: appear 1.4s;
    @keyframes appear {
      0% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
    @media (max-width: 368px) {
      right: -10px;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 2px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItemHome = styled.li`
  height: 80px;
  animation: appear 1.2s;
  @keyframes appear {
    0% {
      opacity: 0;
    }

    40% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const NavItemFirst = styled.li`
  height: 80px;
`;

export const NavItemSecond = styled.li`
  height: 80px;
`;

export const NavItemThird = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &.active {
    border-bottom: 3px solid ${Dark};
    filter: brightness(0.9);
  }

  &:hover {
    filter: brightness(1.1);
    transform: scale(1.1);
`;
