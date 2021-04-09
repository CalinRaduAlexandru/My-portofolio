import React from "react";
import {
  ProjectWrapper,
  ProjectInfo,
  ProjectImg,
  ProjectTitle,
  ProjectSubTitle,
  Photo,
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
  photo,
  text,
  websiteRef,
  githubRef,
  cloud,
}) => {
  return (
    <ProjectWrapper>
      <ProjectInfo
        href={`${websiteRef}`}
        target="_blank"
        aria-label="herokuapp"
      >
        {img ? <ProjectImg src={img} /> : null}
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectSubTitle>{subtitle}</ProjectSubTitle>
        <Photo src={photo} width="300px" />
        <ProjectText>{text}</ProjectText>
      </ProjectInfo>
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
    </ProjectWrapper>
  );
};
