import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import LinkButton from "../../components/LinkButton";
import mediaQueryFor from "../../theme/mediaQueries";

export default function Categories({ categories = [], actionClb = () => {} }) {
  const { activeCategory } = useSelector(({ gallery }) => gallery || {});

  return (
    <Root>
      {categories.map((item) => (
        <LinkButton
          key={item.title}
          isActive={activeCategory === item.category}
          actionClb={() => {
            actionClb(item.category);
          }}
          title={item.title}
        />
      ))}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  padding: 60px 0;

  ${mediaQueryFor.mobile} {
    display: none;
  }
`;
