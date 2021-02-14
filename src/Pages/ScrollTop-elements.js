import styled from "styled-components";
import { IoMdRocket } from "react-icons/io";

export const RocketWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 5%;
  right: 5%;
  color: #dddcde;
  cursor: pointer;
  z-index: 100;

  @media (max-width: 768px) {
    right: 0%;
    bottom: 1%;
  }
`;
export const Rocket = styled(IoMdRocket)`
  width: 50px;
  height: 50px;
`;
