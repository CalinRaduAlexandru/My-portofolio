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
    rgba(34, 193, 195, 1) 0%,
    rgba(45, 112, 253, 1) 100%
  );
`;

export const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 70px;
width: 100%;
font-weight: 700;
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

export const FirstProjectWrapper = styled.div`
  margin: 0px auto;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 3px solid black;
  padding: 30px;

  @media screen and (max-width: 768px) {
  }
`;

export const ProjectWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 3px solid black;
  padding: 30px;

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const ProjectInfo = styled.div`
  padding: 20px;
  margin-right: 20px;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const ProjectTitle = styled.h1`
  color: black;
`;

export const ProjectSubTitle = styled.h2`
  font-size: 20px;
  color: #002366;
`;
export const ProjectText = styled.p`
  max-width: 350px;
  font-weight: 500;
  margin: 30px 0;
  color: #2c1a24;
`;

export const Buttons = styled.div`
display: flex;
justify-content: center;
align-items: center;


  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 300px) {
      font-size: 10px;

`;

export const BtnProjectLeft = styled.a`
  font-size: 1.2rem;
  color: #002366;
  cursor: pointer;
  background: #38cfd9;
  padding: 15px 35px;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #00b4d8;
  }
`;

export const BtnProjectRight = styled.a`
  margin: 0 25px;
  color: #002366;
  cursor: pointer;
  background: #38cfd9;
  padding: 5px 33px;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #00b4d8;
  }


  @media screen and (max-width: 300px) {
    margin: 0px;
`;

export const ImgWrapper = styled.div``;

export const Github = styled(FaGithub)`
  color: #002366;
`;
