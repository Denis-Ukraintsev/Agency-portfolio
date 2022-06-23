import styled from "styled-components/macro";
import { primaryWhite } from "../../theme/colors";

export default function PricingHeader() {
  return (
    <Root>
      <Title>Pricing</Title>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 50px;
`;
const Title = styled.span`
  color: ${primaryWhite};
  margin-bottom: 30px;
  font-size: 50px;
  font-weight: 700;
`;
