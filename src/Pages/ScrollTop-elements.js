import styled from "styled-components";
import { IoMdRocket } from "react-icons/io";
import { Link } from "react-scroll";

export const RocketWrapper = styled(Link)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 5%;
  right: 5%;
  color: #dddcde;
  cursor: pointer;
`;
export const Rocket = styled(IoMdRocket)`
  width: 50px;
  height: 50px;
`;
