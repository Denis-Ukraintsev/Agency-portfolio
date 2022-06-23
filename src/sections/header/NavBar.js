import styled from "styled-components/macro";
import { Link } from "@reach/router";
import mediaQueryFor from "../../theme/mediaQueries";
import ContactButton from "../../components/ContactButton";
import Logo from "../../components/Logo";
import { primaryWhite, primaryBrown } from "../../theme/colors";

export default function NavBar() {
  const isActive = ({ isCurrent }) => {
    return {
      style: {
        color: isCurrent ? primaryBrown : primaryWhite
      }
    };
  };

  return (
    <Root>
      <Logo />
      <Navbar>
        <StyledLink getProps={isActive} to="about">
          About
        </StyledLink>
        <StyledLink getProps={isActive} to="services">
          Services
        </StyledLink>
        <StyledLink getProps={isActive} to="pricing">
          Pricing
        </StyledLink>
        <StyledLink getProps={isActive} to="/blog">
          Blog
        </StyledLink>
      </Navbar>
      <ContactBtnContainer>
        <ContactButton />
      </ContactBtnContainer>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  width: 100%;
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaQueryFor.mobile} {
    display: none;
  }
`;
const ContactBtnContainer = styled.div`
  ${mediaQueryFor.mobile} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 60px;
  :last-child {
    margin: 0;
  }
  transition: color 0.3s;

  :active,
  :hover,
  :focus {
    outline: none;
    color: ${primaryBrown};
  }
`;
