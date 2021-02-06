import React from "react";
import profile from "./../../Assets/profile.jpg";
import {
  ResumeContainer,
  ReturnBtn,
  ImgWrapper,
  ProfileImg,
  LanguagesWrapper,
  LanguagesTitle,
  Languages,
  PassionsWrapper,
  PassionsTitle,
  Passions,
  ProgrammingWrapper,
  ProgrammingTitle,
  ProgrammingSkills,
  SoftSkillsWrapper,
  SoftSkillsTitle,
  SoftSkills,
  QuoteWrapper,
  QuotesLeft,
  Quote,
  QuotesRight,
} from "./Resume-elements";

const Resume = ({ toggleResume }) => {
  return (
    <ResumeContainer>
      <ImgWrapper>
        <ProfileImg src={profile} />
      </ImgWrapper>
      <LanguagesWrapper>
        <LanguagesTitle>Languages</LanguagesTitle>
        <Languages>
          <ul>
            <li>Romanian (Native)</li>
            <li>English (Fluent)</li>
            <li>French (Intermediate)</li>
            <li>Spanish (Intermediate)</li>
            <li>Italian (Intermediate)</li>
            <li>Japanese (Beginer)</li>
          </ul>
        </Languages>
      </LanguagesWrapper>
      <PassionsWrapper>
        <PassionsTitle>Passions and interests</PassionsTitle>
        <Passions>Learning, spirituality, philosophy</Passions>
      </PassionsWrapper>

      <ProgrammingWrapper>
        <ProgrammingTitle>
          Programming tools and relevant skills
        </ProgrammingTitle>
        <ProgrammingSkills>JS, React, Redux</ProgrammingSkills>
      </ProgrammingWrapper>
      <SoftSkillsWrapper>
        <SoftSkillsTitle>Soft Skills</SoftSkillsTitle>
        <SoftSkills>Receptionist, Clown animator for children</SoftSkills>
      </SoftSkillsWrapper>
      <QuoteWrapper>
        <Quote>
          <QuotesLeft />
          There are no problems. <br /> Only functions!
          <QuotesRight />
        </Quote>
      </QuoteWrapper>
      <ReturnBtn onClick={toggleResume}>Go back!</ReturnBtn>
    </ResumeContainer>
  );
};

export default Resume;
