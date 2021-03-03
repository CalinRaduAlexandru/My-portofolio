import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const ProjectsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(31, 115, 174);
  background: linear-gradient(
    180deg,
    rgba(31, 115, 174, 1) 0%,
    rgba(97, 175, 231, 1) 100%
  );
`;

export const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #fff;
height: 70px;
width: 100%;
font-weight: 700;
cursor: default;
background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.4) 60%
  ),
  linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
border-bottom-left-radius: 40% 30%;
border-bottom-right-radius: 40% 30%;
}
`;
export const ProjectsWrapper = styled.div`
  display: flex;
  padding: 50px 0 0 0;
  margin: 50px 0 0 0;
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
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 10px 0px;
  }
`;

export const ProjectInfo = styled.div`
  font-size: 14px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;

  @media (max-width: 400px) {
    width: 90vw;
  }
`;

export const ProjectTitle = styled.h1`
  color: #fff;
  font-size: 23px;
  margin-top: 20px;
  margin-left: 10px;
`;

export const ProjectSubTitle = styled.h2`
  font-size: 16px;
  margin-top: 10px;
  color: #0d5485;
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
  justify-content: space-between;
  align-items: center;
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
  color: #0d5485;
  font-weight: bold;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const BtnProjectRight = styled.a`
  cursor: pointer;
`;

export const Github = styled(FaGithub)`
  color: #0d5485;
  font-size: 30px;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const BottomImg = styled.div`
  width: 90vw;
  margin-top: -150px;
  height: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  z-index: 0;
`;
