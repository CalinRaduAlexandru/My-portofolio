import styled from "styled-components";

export const ProjectsContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100vw;
  @media (max-width: 1400px) {
    margin-top: -60px;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    margin-top: 0;
    padding: 0;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const FirstRow = styled.div`
  display: flex;

  margin: 0 30px 0 40px;
  @media (max-width: 1250px) {
    display: none;
  }
`;
export const SecondRow = styled.div`
  margin-top: -80px;
`;

export const ThirdRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  @media (max-width: 1250px) {
    display: none;
  }
`;
