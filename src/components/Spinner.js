import styled, { keyframes } from "styled-components/macro";
import { darkBrown } from "../theme/colors";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export default function Spinner() {
  return <Loading />;
}

const Loading = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top: 3px solid ${darkBrown};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 0.6s linear infinite;
`;
