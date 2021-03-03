import React from "react";
import "aos/dist/aos.css";
import { CardCrown } from "./Cards/CardCrown";
import { CardFilter } from "./Cards/CardFilter";
import { CardSearch } from "./Cards/CardSearch";
import { CardGrateful } from "./Cards/CardGrateful";
import geometry from "./../../Assets/FrameLarge.png";

import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectWrapper,
  ProjectInfo,
  ProjectTitle,
  ProjectSubTitle,
  ProjectText,
  Buttons,
  BtnProjectLeft,
  LiveText,
  BtnProjectRight,
  Github,
  BottomImg,
} from "./Projects-elements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsWrapper>
        <ProjectWrapper>
          <CardCrown />
          <ProjectInfo>
            <ProjectTitle>CrownFeel Ltd.</ProjectTitle>
            <ProjectSubTitle>React | Redux | Stripe</ProjectSubTitle>
            <ProjectText>
              The front-end of an e-commerce platform with online payment.
            </ProjectText>
            <Buttons>
              <BtnProjectLeft
                href="https://crownfeelapp.herokuapp.com/"
                target="_blank"
                aria-label="herokuapp"
              >
                <LiveText>Live</LiveText>
              </BtnProjectLeft>
              <BtnProjectRight
                href="https://github.com/CalinRaduAlexandru/CrownFeel/tree/masterbranch"
                target="_blank"
                aria-label="Github"
              >
                <Github />
              </BtnProjectRight>
            </Buttons>
          </ProjectInfo>
        </ProjectWrapper>
        <ProjectWrapper>
          <CardSearch />
          <ProjectInfo>
            <ProjectTitle>Recognize faces</ProjectTitle>
            <ProjectSubTitle>React | NodeJs | Postgres</ProjectSubTitle>
            <ProjectText>
              Full-stack app in which you can add photos URL`s and accumulate
              points for each face.
            </ProjectText>
            <Buttons>
              <BtnProjectLeft
                href="https://search-face-app.herokuapp.com/"
                target="_blank"
                aria-label="Heroku"
              >
                <LiveText>Live</LiveText>
              </BtnProjectLeft>
              <BtnProjectRight
                href="https://github.com/CalinRaduAlexandru/Search-face"
                target="_blank"
                aria-label="Github"
              >
                <Github />
              </BtnProjectRight>
            </Buttons>
          </ProjectInfo>
        </ProjectWrapper>
        <ProjectWrapper>
          <CardFilter />
          <ProjectInfo>
            <ProjectTitle>Search friends</ProjectTitle>
            <ProjectSubTitle>React | NodeJs | Postgres</ProjectSubTitle>
            <ProjectText>
              Full-stack app in which you can add custom users and search
              through them.
            </ProjectText>
            <Buttons>
              <BtnProjectLeft
                href="https://filter-cards-app2.herokuapp.com/"
                target="_blank"
                aria-label="Heroku"
              >
                <LiveText>Live</LiveText>
              </BtnProjectLeft>
              <BtnProjectRight
                href="https://github.com/CalinRaduAlexandru/Filter-cards-app"
                target="_blank"
                aria-label="Github"
              >
                <Github />
              </BtnProjectRight>
            </Buttons>
          </ProjectInfo>
        </ProjectWrapper>
        <ProjectWrapper>
          <CardGrateful />
          <ProjectInfo>
            <ProjectTitle>Gratefulness</ProjectTitle>
            <ProjectSubTitle>React | CSS</ProjectSubTitle>
            <ProjectText>
              Create a gratefulness list. Plus a random quote generator for
              inspiration!
            </ProjectText>
            <Buttons>
              <BtnProjectLeft
                href="https://greatfulness-app.herokuapp.com/"
                target="_blank"
                aria-label="Heroku"
              >
                <LiveText>Live</LiveText>
              </BtnProjectLeft>
              <BtnProjectRight
                href="https://github.com/CalinRaduAlexandru/Greatfulness-app"
                target="_blank"
                aria-label="Github"
              >
                <Github />
              </BtnProjectRight>
            </Buttons>
          </ProjectInfo>
        </ProjectWrapper>
      </ProjectsWrapper>
      <BottomImg>
        <img src={geometry} width="1300" height="500" alt="geometry" />
      </BottomImg>
    </ProjectsContainer>
  );
};

export default Projects;
