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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100vw;

  @media (max-width: 1300px) {
    flex-direction: column;
    margin-top: 0;
    padding: 0;
  }
`;

export const FirstRow = styled.div`
  display: flex;
    margin-top: 80px;
  width: 90vw;
  }
`;
export const SecondRow = styled.div`
  margin-top: -80px;
`;

export const ThirdRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;
