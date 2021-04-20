import React from "react";
import "aos/dist/aos.css";
import "./../Hero/Scene.styles.css";
import { Project } from "../../SingleComponent/Project-component/Project-component";
import Face from "./../../Assets/Face.svg";
import Lotus from "./../../Assets/Lotus.svg";
import MagnifyingGlass from "./../../Assets/MagnifyingGlass.svg";
import Crownfeel from "./../../Assets/Crownfeel.svg";
import Carousel from "react-elastic-carousel";
import crownPhoto from "./../../Assets/CrownPhoto.jpg";
import recognizePhoto from "./../../Assets/RecignizePhoto.jpg";
import searchPhoto from "./../../Assets/searchPhoto.jpg";
import psiPhoto from "./../../Assets/psiPhoto.jpg";
import GratfulPhoto from "./../../Assets/GratfulPhoto.jpg";
import "./Projects.css";
import "./../About/About.styles.css";
import {
  ProjectsContainer,
  ProjectsWrapper,
  FirstRow,
} from "./Projects-elements";

const Projects = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="containers">
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <FirstRow>
            <Carousel breakPoints={breakPoints}>
              <Project
                key="5"
                img={Lotus}
                photo={psiPhoto}
                title="Psi-consult"
                subtitle="NextJs | Sass | AWS"
                text="Professional website for a psychology consultancy."
                websiteRef="https://psi-consult.vercel.app/"
                githubRef="https://github.com/CalinRaduAlexandru/psi-consultant"
              />
              <Project
                key="1"
                img={MagnifyingGlass}
                photo={searchPhoto}
                title="Search friends"
                subtitle="React | NodeJs | Postgres"
                text="Full-stack app in which you can add custom users and search through them."
                websiteRef="https://filter-cards-app2.herokuapp.com/"
                githubRef="https://github.com/CalinRaduAlexandru/Filter-cards-app"
              />

              <Project
                key="2"
                img={Crownfeel}
                photo={crownPhoto}
                title="CrownFeel Ltd."
                subtitle="React | Redux | Stripe"
                text="The front-end of an e-commerce platform with online payment."
                websiteRef="https://crownfeelapp.herokuapp.com/"
                githubRef="https://github.com/CalinRaduAlexandru/CrownFeel/tree/masterbranch"
              />
              <Project
                key="3"
                img={Lotus}
                photo={GratfulPhoto}
                title="Gratefulness"
                subtitle="React | CSS"
                text="Create a gratefulness list. Plus a random quote generator for
        inspiration!"
                websiteRef="https://greatfulness-app.herokuapp.com/"
                githubRef="https://github.com/CalinRaduAlexandru/Greatfulness-app"
              />

              <Project
                key="4"
                img={Face}
                photo={recognizePhoto}
                title="Recognize faces"
                subtitle="React | NodeJs | Postgres"
                text="Full-stack app in which you can add photos URL`s and accumulate points for each face."
                websiteRef="https://search-face-app.herokuapp.com/"
                githubRef="https://github.com/CalinRaduAlexandru/Search-face"
              />
            </Carousel>
          </FirstRow>
        </ProjectsWrapper>
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
