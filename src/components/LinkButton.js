import styled from "styled-components/macro";
import { primaryBrown, primaryGreen } from "../theme/colors";

export default function LinkButton({
  title = "",
  isActive = false,
  actionClb = () => {}
}) {
  return (
    <LinkBtn isActive={isActive} onClick={actionClb}>
      {title}
    </LinkBtn>
  );
}

const LinkBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isActive }) => (isActive ? primaryGreen : primaryBrown)};
  text-transform: capitalize;
  background: none;
  border: none;
  :hover {
    color: ${primaryGreen};
  }
  transition: color 0.3s;
`;
