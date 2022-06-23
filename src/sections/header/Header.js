import styled from "styled-components/macro";
import { headerBgd } from "../../theme/colors";
import Description from "./Description";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <Root>
      <NavBar />
      <Description />
    </Root>
  );
}

const Root = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 290px;
  background-color: ${headerBgd};
`;
