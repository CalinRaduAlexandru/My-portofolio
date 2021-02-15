import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const ProjectsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(45, 112, 253, 0.6) 100%,
    rgba(34, 193, 195, 0.5) 0%
  );
`;

export const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 70px;
width: 100%;
font-weight: 700;
cursor: default;
background: #0077b6;
background: linear-gradient(
  0deg,
  rgba(34, 193, 195, 1) 0%,
  rgba(45, 112, 253, 1) 100%
);
border-bottom-left-radius: 40% 30%;
border-bottom-right-radius: 40% 30%;
box-shadow: 0 0 20px rgba(0, 0, 0, 1);
}
`;
export const ProjectsWrapper = styled.div`
  display: flex;
  padding: 50px 0;
  margin: 50px 0;
  justify-items: center;
  align-items: center;

  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0;
  }

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const ProjectWrapper = styled.div`
  margin: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectInfo = styled.div`
  font-size: 14px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #6189f2;
  border-radius: 25px;
`;

export const ProjectTitle = styled.h1`
  color: #fff;
  font-size: 23px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const ProjectSubTitle = styled.h2`
  font-size: 16px;
  margin-top: 10px;
  color: #002366;
  margin-left: 10px;
`;
export const ProjectText = styled.p`
  max-width: 250px;
  height: 80px;
  font-weight: 500;
  margin: 20px 0 0 10px;
  color: #2c1a24;
  color: #fff;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const BtnProjectLeft = styled.a`
  position: relative;
  width: 80px;
  height: 40px;
  border-radius: 25px;
  background: #a4baf5;
  transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0px -2px 10px rgba(255, 255, 255, 1),
    0px 6px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:hover {
    background: #bfcef5;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 17px;
    z-index: 2;
  }
  &:active {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.02);
    &:after {
      box-shadow: inset 0px 0px 2px rgb(255, 255, 255),
        inset 0px 2px 5px rgba(0, 0, 0, 0.15);
    }
  }

  @media screen and (max-width: 768px) {
    box-shadow: none;
  }
`;

export const LiveText = styled.p`
  text-decoration: none;
  position: absolute;
  top: 30%;
  left: 30%;
  color: #002366;
  font-weight: bold;
`;

export const BtnProjectRight = styled.a`
  position: relative;
  width: 80px;
  height: 40px;
  border-radius: 25px;
  margin-left: 20px;
  background: #a4baf5;
  transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0px -2px 10px rgba(255, 255, 255, 1),
    0px 6px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:hover {
    background: #bfcef5;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 17px;
    z-index: 2;
  }
  &:active {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.02);
    &:after {
      box-shadow: inset 0px 0px 2px rgb(255, 255, 255),
        inset 0px 2px 5px rgba(0, 0, 0, 0.15);
    }
  }
  @media screen and (max-width: 768px) {
    box-shadow: none;
  }
`;

export const Github = styled(FaGithub)`
  color: #002366;
`;
