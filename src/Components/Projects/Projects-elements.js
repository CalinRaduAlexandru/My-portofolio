import styled from "styled-components";

export const ProjectsContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 700px) {
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 0 0 0 40px;
  @media (max-width: 1400px) {
    margin-top: -60px;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    margin-top: 0;
    padding: 0;
    width: 90vw;
  }
  @media (max-width: 700px) {
  }
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1300px) {
    flex-direction: row;
    width: 100%;
    margin-bottom: -100px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 0;
    align-items: flex-start;
    margin-left: -150px;
  }
  @media (max-width: 500px) {
    margin-left: -100px;
  }
  @media (max-width: 500px) {
    margin: 20px 0;
    align-items: center;
  }
`;
export const SecondRow = styled.div`
  margin-top: -80px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const ThirdRow = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1300px) {
    flex-direction: row;
    width: 100%;
    margin-top: -100px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: -650px;
    align-items: flex-end;
    margin-right: -150px;
  }
  @media (max-width: 500px) {
    margin-right: -100px;
  }
  @media (max-width: 500px) {
    margin 0px;
    align-items: center;
  }
`;
