import GalleryContainer from "./sections/about/GalleryContainer";
import styled from "styled-components/macro";
import Header from "./sections/header/Header";
import { Router, Redirect } from "@reach/router";
import Services from "./sections/services/Services";
import Pricing from "./sections/pricing/Pricing";
import Blog from "./sections/blog/Blog";
import { primaryBgd } from "./theme/colors";

export default function App() {
  return (
    <Root>
      <Header />
      <ContentRouter>
        <GalleryContainer path="/about" />
        <Services path="/services" />
        <Pricing path="/pricing" />
        <Blog path="/blog" />
        <Redirect noThrow from="/" to="/about" />
      </ContentRouter>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${primaryBgd};
  height: 100vh;
`;
const ContentRouter = styled(Router)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${primaryBgd};
  height: 100%;
  overflow: hidden;
`;
