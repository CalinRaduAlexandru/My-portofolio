import React from "react";
import "aos/dist/aos.css";
import "./../Hero/Scene.styles.css";
import PhoneSlides from "./PhoneSlides";
import { Project } from "../../SingleComponent/Project-component/Project-component";
import Face from "./../../Assets/Face.svg";
import Lotus from "./../../Assets/Lotus.svg";
import MagnifyingGlass from "./../../Assets/MagnifyingGlass.svg";
import Crownfeel from "./../../Assets/Crownfeel.svg";

import {
  ProjectsContainer,
  ProjectsWrapper,
  FirstRow,
  SecondRow,
  ThirdRow,
} from "./Projects-elements";

const Projects = () => {
  return (
    <div className="container">
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <FirstRow data-aos="fade-right">
            <Project
              img={MagnifyingGlass}
              cloud="true"
              title="Search friends"
              subtitle="React | NodeJs | Postgres"
              text="Full-stack app in which you can add custom users and search through them."
              websiteRef="https://filter-cards-app2.herokuapp.com/"
              githubRef="https://github.com/CalinRaduAlexandru/Filter-cards-app"
            />

            <Project
              img={Crownfeel}
              cloud="true"
              title="CrownFeel Ltd."
              subtitle="React | Redux | Stripe"
              text="The front-end of an e-commerce platform with online payment."
              websiteRef="https://crownfeelapp.herokuapp.com/"
              githubRef="https://github.com/CalinRaduAlexandru/CrownFeel/tree/masterbranch"
            />
          </FirstRow>
          <SecondRow>
            <PhoneSlides />
          </SecondRow>
          <ThirdRow data-aos="fade-left">
            <Project
              img={Lotus}
              cloud="true"
              title="Gratefulness"
              subtitle="React | CSS"
              text="Create a gratefulness list. Plus a random quote generator for
          inspiration!"
              websiteRef="https://greatfulness-app.herokuapp.com/"
              githubRef="https://github.com/CalinRaduAlexandru/Greatfulness-app"
            />

            <Project
              img={Face}
              cloud="true"
              title="Recognize faces"
              subtitle="React | NodeJs | Postgres"
              text="Full-stack app in which you can add photos URL`s and accumulate points for each face."
              websiteRef="https://search-face-app.herokuapp.com/"
              githubRef="https://github.com/CalinRaduAlexandru/Search-face"
            />
          </ThirdRow>
        </ProjectsWrapper>
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
