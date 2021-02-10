import React from "react";
import { CardCrown } from "./Cards/CardCrown";
import { CardFilter } from "./Cards/CardFilter";
import { MdKeyboardArrowDown } from "react-icons/md";

import {
  ProjectsContainer,
  Header,
  FirstProjectWrapper,
  ProjectWrapper,
  ProjectInfo,
  ProjectTitle,
  ProjectSubTitle,
  ProjectText,
  Buttons,
  BtnProjectLeft,
  BtnProjectRight,
  Github,
} from "./Projects-elements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Header>
        Personal projects{" "}
        <MdKeyboardArrowDown style={{ marginTop: "5px", marginLeft: "5px" }} />
      </Header>
      <FirstProjectWrapper>
        <ProjectInfo>
          <ProjectTitle>CrownFeel Ltd.</ProjectTitle>
          <ProjectSubTitle>React | Redux | Firebase</ProjectSubTitle>
          <ProjectText>
            A fully fledged e-commerce website with user authentication, cart
            memory storage and online payment.
          </ProjectText>
          <Buttons>
            <BtnProjectLeft
              to="//www.github.com/CalinRaduAlexandru/"
              target="_blank"
              aria-label="Github"
            >
              Live
            </BtnProjectLeft>
            <BtnProjectRight
              to="//www.github.com/CalinRaduAlexandru/"
              target="_blank"
              aria-label="Github"
            >
              <Github style={{ fontSize: "35px" }} />
            </BtnProjectRight>
          </Buttons>
        </ProjectInfo>
        <CardCrown />
      </FirstProjectWrapper>
      <ProjectWrapper>
        <ProjectInfo>
          <ProjectTitle>Search friends</ProjectTitle>
          <ProjectSubTitle>React | NodeJs | Postgres</ProjectSubTitle>
          <ProjectText>
            A full-stack app in which you can add and search users.
          </ProjectText>
          <Buttons>
            <BtnProjectLeft
              href="https://filter-cards-app2.herokuapp.com/"
              target="_blank"
              aria-label="Heroku"
            >
              Live
            </BtnProjectLeft>
            <BtnProjectRight
              href="https://github.com/CalinRaduAlexandru/Filter-cards-app"
              target="_blank"
              aria-label="Github"
            >
              <Github style={{ fontSize: "35px" }} />
            </BtnProjectRight>
          </Buttons>
        </ProjectInfo>
        <CardFilter />
      </ProjectWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
