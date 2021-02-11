import React from "react";
import { CardCrown } from "./Cards/CardCrown";
import { CardFilter } from "./Cards/CardFilter";
import { CardSearch } from "./Cards/CardSearch";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CardGrateful } from "./Cards/CardGrateful";

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
            A front-end e-commerce platform with online payment.
          </ProjectText>
          <Buttons>
            <BtnProjectLeft
              href="https://crownfeelapp.herokuapp.com/"
              target="_blank"
              aria-label="herokuapp"
            >
              Live
            </BtnProjectLeft>
            <BtnProjectRight
              href="https://github.com/CalinRaduAlexandru/CrownFeel/tree/masterbranch"
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
          <ProjectTitle>Recognize faces</ProjectTitle>
          <ProjectSubTitle>React | NodeJs | Postgres</ProjectSubTitle>
          <ProjectText>
            A full-stack app in which you can add photos URL`s and accumulate
            points.
          </ProjectText>
          <Buttons>
            <BtnProjectLeft
              href="https://search-face-app.herokuapp.com/"
              target="_blank"
              aria-label="Heroku"
            >
              Live
            </BtnProjectLeft>
            <BtnProjectRight
              href="https://github.com/CalinRaduAlexandru/Search-face"
              target="_blank"
              aria-label="Github"
            >
              <Github style={{ fontSize: "35px" }} />
            </BtnProjectRight>
          </Buttons>
        </ProjectInfo>
        <CardSearch />
      </ProjectWrapper>
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
      <ProjectWrapper>
        <ProjectInfo>
          <ProjectTitle>Gratefulness App</ProjectTitle>
          <ProjectSubTitle>React | CSS</ProjectSubTitle>
          <ProjectText>
            Create a gratefulness list app which you can add and edit text. Plus
            you have a random quote generator to inspire you!
          </ProjectText>
          <Buttons>
            <BtnProjectLeft
              href="https://greatfulness-app.herokuapp.com/"
              target="_blank"
              aria-label="Heroku"
            >
              Live
            </BtnProjectLeft>
            <BtnProjectRight
              href="https://github.com/CalinRaduAlexandru/Greatfulness-app"
              target="_blank"
              aria-label="Github"
            >
              <Github style={{ fontSize: "35px" }} />
            </BtnProjectRight>
          </Buttons>
        </ProjectInfo>
        <CardGrateful />
      </ProjectWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
