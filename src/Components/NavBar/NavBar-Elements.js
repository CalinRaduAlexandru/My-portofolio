import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  position: relative;
  background: ${({ scrollNav }) => (scrollNav ? "#05043d" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1rem;
  top: 0;
  z-index: 100;
  position: -webkit-sticky;
  position: sticky;
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
  position: sticky;
`;

export const NavLogo = styled.div`
  color: #0077b6;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 26px;
  display: flex;
  align-items: center;
  text-decoration: none;
  animation: appear 1s;
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

  @media (max-width: 768px) {
    font-size: 18px;
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
`;

export const NavItemSecond = styled.li`
  height: 80px;
  animation: appear 1.6s;
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
  animation: appear 1.8s;
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
   transition: ease-in-out 0.2s;

  &.active {
    border-bottom: 3px solid #20639b;
  }

  &:hover {
    color: #0077b6;
    transform: scale(1.1);
`;
