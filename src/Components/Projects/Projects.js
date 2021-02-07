import React from "react";
import { FaGithub } from "react-icons/fa";
import { Card } from "../Card";

import {
  ProjectsContainer,
  ProjectWrapper,
  ProjectInfo,
  ProjectTitle,
  ProjectSubTitle,
  ProjectText,
  Buttons,
  BtnProjectLeft,
  BtnProjectRight,
} from "./Projects-elements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectWrapper>
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
              <FaGithub style={{ fontSize: "35px" }} />
            </BtnProjectRight>
          </Buttons>
        </ProjectInfo>
        <Card />
      </ProjectWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
