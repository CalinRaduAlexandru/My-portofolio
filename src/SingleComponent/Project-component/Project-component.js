import React from "react";
import BgProjectCloud from "./../../Assets/BgProjectCloud.svg";
import {
  ProjectWrapper,
  ProjectCloud,
  ProjectInfo,
  ProjectImg,
  ProjectTitle,
  ProjectSubTitle,
  ProjectText,
  Buttons,
  BtnProjectLeft,
  LiveText,
  BtnProjectRight,
  Github,
} from "./Project-elements.js";

export const Project = ({
  img,
  title,
  subtitle,
  text,
  websiteRef,
  githubRef,
}) => {
  return (
    <ProjectWrapper>
      <ProjectCloud src={BgProjectCloud} alt="cloud" />
      <ProjectInfo>
        <ProjectImg src={img} />
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectSubTitle>{subtitle}</ProjectSubTitle>
        <ProjectText>{text}</ProjectText>
        <Buttons>
          <BtnProjectLeft
            href={`${websiteRef}`}
            target="_blank"
            aria-label="herokuapp"
          >
            <LiveText>Live</LiveText>
          </BtnProjectLeft>
          <BtnProjectRight
            href={`${githubRef}`}
            target="_blank"
            aria-label="Github"
          >
            <Github />
          </BtnProjectRight>
        </Buttons>
      </ProjectInfo>
    </ProjectWrapper>
  );
};
