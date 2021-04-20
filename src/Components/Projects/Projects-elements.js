import styled from "styled-components";

export const ProjectsContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: white;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 80vw;
  z-index: 10;
  margin-top: -100px;
  /* margin-bottom: 200px; */
`;

export const FirstRow = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 90vw;
  cursor: grab;

  @media (max-width: 700px) {
    width: 100vw;
  }
`;
