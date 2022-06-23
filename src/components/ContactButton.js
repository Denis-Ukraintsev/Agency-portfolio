import styled from "styled-components/macro";
import { headerBgd, primaryWhite } from "../theme/colors";

export default function ContactButton({ clickClb = () => {} }) {
  return <Root onClick={clickClb}>Contact</Root>;
}

const Root = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: ${headerBgd};
  border: 1px solid ${primaryWhite};
  border-radius: 4px;
  color: ${primaryWhite};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;
