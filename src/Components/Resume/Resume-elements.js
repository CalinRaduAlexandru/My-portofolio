import styled from "styled-components";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export const ResumeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 120px;
  margin: 0 auto;
  items-align: center;
  justify-content: center;
  background: black;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 150px 70px;
  }
`;

export const ReturnBtn = styled.div`
  position: absolute;
  right: 5%;
  top: 5%;
  border-radius: 25px;
  max-width: 150px;
  background: white;
  padding: 20px 30px;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  margin: 20px;
  background: black;
`;

export const ProfileImg = styled.img`
  width: 100%;
  border-radius: 50%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const LanguagesWrapper = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 15px;
  margin: 20px;
  background: orange;
`;

export const LanguagesTitle = styled.h2`
  color: white;
  padding: 5px;
  border-bottom: 3px solid black;
  margin-bottom: 20px;
`;

export const Languages = styled.p`
  color: black;
  font-size: 20px;
  margin-left: 15px;
`;

export const PassionsWrapper = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 15px;
  margin: 20px;
  background: red;
`;

export const PassionsTitle = styled.h2`
  color: white;
`;

export const Passions = styled.p`
  color: white;
`;

export const ProgrammingWrapper = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 15px;
  margin: 20px;
  background: blue;
`;

export const ProgrammingTitle = styled.h2`
  color: white;
`;

export const ProgrammingSkills = styled.p`
  color: white;
`;

export const SoftSkillsWrapper = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 15px;
  margin: 20px;
  background: green;
`;

export const SoftSkillsTitle = styled.h2`
  color: white;
`;

export const SoftSkills = styled.p`
  color: white;
`;

export const QuoteWrapper = styled.div`
  background: black;
  width: 300px;
  height: 300px;
  margin: 20px;
`;

export const QuotesLeft = styled(ImQuotesLeft)`
  color: lightblue;
  margin-right: 10px;
  font-size: 40px;
`;

export const Quote = styled.div`
  color: #fff;
  font-size: 30px;
  margin: 50px;
`;

export const QuotesRight = styled(ImQuotesRight)`
  color: lightblue;
  margin-left: 10px;
  font-size: 40px;
`;
