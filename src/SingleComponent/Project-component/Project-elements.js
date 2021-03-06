import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const ProjectWrapper = styled.div`
  margin: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
  @media (max-width: 700px) {
    margin-bottom: 150px;
  }
  @media (max-width: 500px) {
    margin: 10px 0;
  }
`;

export const ProjectCloud = styled.img`
  position: absolute;
  width: 300px;
  @media (max-width: 500px) {
    width: 250px;
  }
`;

export const ProjectInfo = styled.a`
  font-size: 14px;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;
  text-decoration: none;
  cursor: pointer;
  transition: ease-in-out 0.5s;
  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
`;

export const ProjectImg = styled.img`
  align-self: center;
  width: 50px;
  height: 50px;
`;

export const ProjectTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-top: 20px;
  margin-left: 10px;
  @media (max-width: 500px) {
    font-size: 18px;
    align-self: center;
  }
`;

export const ProjectSubTitle = styled.h2`
  font-size: 16px;
  margin-top: 10px;
  color: #61afe7;
  margin-left: 10px;
  @media (max-width: 500px) {
    font-size: 14px;
    align-self: center;
  }
`;
export const ProjectText = styled.p`
  max-width: 250px;
  height: 80px;
  font-weight: 500;
  margin: 20px 0 0 10px;
  color: #2c1a24;
  color: #fff;
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin-left: 10px;
  z-index: 10;
`;

export const BtnProjectLeft = styled.a`
  transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-right: 50px;
  text-decoration: none;
  cursor: pointer;
`;

export const LiveText = styled.p`
  font-size: 16px;
  color: #61afe7;
  font-weight: bold;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const BtnProjectRight = styled.a`
  cursor: pointer;
`;

export const Github = styled(FaGithub)`
  color: #61afe7;
  font-size: 30px;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const Phone = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;
