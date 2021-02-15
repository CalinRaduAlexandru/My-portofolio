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

  &:hover {
    color: #b51e07;
    animation: shake-up 0.4s alternate infinite;

  @keyframes shake-up {
    from {
      transform: translateY(2px);
    }

    to {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    right: 0%;
    bottom: 1%;
  }
`;

export const Rocket = styled(IoMdRocket)`
  width: 50px;
  height: 50px;
  transform: translateX(-3px) rotate(-3deg) translateY(-3px);

  &:hover {
    color: #0030b5;
    animation: shake-rocket 0.2s alternate infinite;
  }

  @keyframes shake-rocket {
    from {
      transform: rotate(5deg);
    }

    to {
      transform: rotate(-5deg);
    }
  }
`;

export const Up = styled.h3``;
