import styled from "styled-components/macro";
import { textGray, primaryWhite } from "../../theme/colors";

export default function AboutHeader() {
  return (
    <Root>
      <Title>Portfolio</Title>
      <Subtitle>
        Agency provides a full service range including technical skills, design,
        business understanding.
      </Subtitle>
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
const Subtitle = styled.span`
  color: ${textGray};
  text-align: center;
  line-height: 25px;
`;
