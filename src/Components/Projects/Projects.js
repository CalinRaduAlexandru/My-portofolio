import React from "react";
import "aos/dist/aos.css";
import "./../Hero/Scene.styles.css";
import PhoneSlides from "./PhoneSlides";
import { Project } from "../../SingleComponent/Project-component/Project-component";
import prjimg from "./../../Assets/filtercard.jpg";

import {
  ProjectsContainer,
  ProjectsWrapper,
  FirstRow,
  SecondRow,
  ThirdRow,
} from "./Projects-elements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <div className="container">
        <ProjectsWrapper>
          <FirstRow>
            <Project
              img={prjimg}
              title="CrownFeel Ltd."
              subtitle="React | Redux | Stripe"
              text="The front-end of an e-commerce platform with online payment."
              websiteRef="https://crownfeelapp.herokuapp.com/"
              githubRef="https://github.com/CalinRaduAlexandru/CrownFeel/tree/masterbranch"
            />
            <Project
              img={prjimg}
              title="Recognize faces"
              subtitle="React | NodeJs | Postgres"
              text="Full-stack app in which you can add photos URL`s and accumulate
            points for each face."
              websiteRef="https://search-face-app.herokuapp.com/"
              githubRef="https://github.com/CalinRaduAlexandru/Search-face"
            />
          </FirstRow>
          <SecondRow>
            <PhoneSlides />
          </SecondRow>
          <ThirdRow>
            <Project
              img={prjimg}
              title="Search friends"
              subtitle="React | NodeJs | Postgres"
              text="Full-stack app in which you can add custom users and search
            through them."
              websiteRef="https://filter-cards-app2.herokuapp.com/"
              githubRef="https://github.com/CalinRaduAlexandru/Filter-cards-app"
            />
            <Project
              img={prjimg}
              title="Gratefulness"
              subtitle="React | CSS"
              text="Create a gratefulness list. Plus a random quote generator for
            inspiration!"
              websiteRef="https://greatfulness-app.herokuapp.com/"
              githubRef="https://github.com/CalinRaduAlexandru/Greatfulness-app"
            />
          </ThirdRow>
        </ProjectsWrapper>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
