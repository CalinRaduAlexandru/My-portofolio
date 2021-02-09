import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: #0077b6;
  white-spate: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #010606
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);


  &:hover {
    transition: 0.2s ease-in-out;
    background: #00b4d8;
  }
`;
