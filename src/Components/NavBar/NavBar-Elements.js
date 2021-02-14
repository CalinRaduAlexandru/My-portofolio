import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  animation: slide-right 1s;
  @keyframes slide-right {
    0% {
      margin-right: 5%;
      width: 100%;
      opacity: 0;
    }

    90% {
      margin-right: 5%;
      width: 100%;
      opacity: 0;
    }
    100% {
      margin-right: 0%;
      width: 100%;
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
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.div`
  color: #0077b6;
  font-family: "Allura", cursive;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 50px;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  animation: appear 5s;
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

  &:hover {
    transition: 0.2s ease-in-out;
    color: #00b4d8;
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
    color: #0077b6;
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

export const NavItemFirst = styled.li`
  height: 80px;
  animation: appear 2s;
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

export const NavItemSecond = styled.li`
  height: 80px;
  animation: appear 3s;
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

export const NavItemThird = styled.li`
  height: 80px;
  animation: appear 4s;
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

export const NavLinks = styled(Link)`
  color: #00b4d8;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #20639b;
  }

  &:hover {
    transition: 0.2s ease-in-out;
    color: #0077b6;
    transform: scale(1.1);
`;
