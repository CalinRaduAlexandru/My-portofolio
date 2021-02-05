import React from "react";
import work1 from "./../../Assets/work1.jpg";
import work2 from "./../../Assets/work2.jpg";
import work3 from "./../../Assets/work3.jpg";
import work4 from "./../../Assets/work4.jpg";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectH2,
  ProjectP,
} from "./Projects-elements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>
        <ProjectsWrapper>
          <ProjectCard>
            <ProjectIcon src={work1} />
            <ProjectH2>Redux | React</ProjectH2>
            <ProjectP>Fully fledged e-commerce platform</ProjectP>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={work2} />
            <ProjectH2>Redux | React</ProjectH2>
            <ProjectP>Fully fledged e-commerce platform</ProjectP>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={work3} />
            <ProjectH2>Redux | React</ProjectH2>
            <ProjectP>Fully fledged e-commerce platform</ProjectP>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={work4} />
            <ProjectH2>Redux | React</ProjectH2>
            <ProjectP>Fully fledged e-commerce platform</ProjectP>
          </ProjectCard>
        </ProjectsWrapper>
      </ProjectsH1>
    </ProjectsContainer>
  );
};

export default Projects;
