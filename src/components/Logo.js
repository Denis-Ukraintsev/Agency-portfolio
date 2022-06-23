import styled from "styled-components/macro";
import LogoIcon from "../assets/icons/LogoIcon";
import { primaryWhite } from "../theme/colors";

export default function Logo() {
  return (
    <Root>
      <LogoIcon />
      <LogoTitle>Agency</LogoTitle>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoTitle = styled.span`
  color: ${primaryWhite};
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
`;
