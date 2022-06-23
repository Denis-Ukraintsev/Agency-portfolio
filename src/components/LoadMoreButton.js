import styled from "styled-components/macro";
import { darkBrown, primaryWhite } from "../theme/colors";
import Spinner from "./Spinner";

export default function LoadMoreButton({
  clickClb = () => {},
  loading = false
}) {
  return (
    <Root isLoading={loading} onClick={clickClb}>
      <Title>Load more</Title>
      {loading && <Spinner />}
    </Root>
  );
}

const Root = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${({ isLoading }) => (isLoading ? "130px" : "100px")};
  height: 40px;
  background-color: ${primaryWhite};
  border: none;
  color: ${darkBrown};
  border-radius: 4px;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  box-shadow: 0px 0px 0.7px rgba(0, 0, 0, 0.024),
    0px 0px 1.9px rgba(0, 0, 0, 0.035), 0px 0px 4.5px rgba(0, 0, 0, 0.046),
    0px 0px 15px rgba(0, 0, 0, 0.07);
`;
const Title = styled.span``;
