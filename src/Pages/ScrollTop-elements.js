import styled from "styled-components";
import { IoMdRocket } from "react-icons/io";

export const RocketWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 5%;
  right: 2%;
  color: #dddcde;
  cursor: pointer;
  z-index: 100;

  @media (max-width: 768px) {
      right: 0%;
      bottom: 1%;
  }

  &:hover {
    color: #75257a;
    animation: shake-up 0.4s alternate infinite;

  @keyframes shake-up {
    from {
      transform: translateY(2px);
    }

    to {
      transform: translateY(-2px);
    }
  }

`;

export const Rocket = styled(IoMdRocket)`
  width: 50px;
  height: 120px;
  bottom: -10px;
  position: absolute;
  transform: translateX(-3px) rotate(-3deg) translateY(-3px);

  &:hover {
    color: #1f73ae;
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
