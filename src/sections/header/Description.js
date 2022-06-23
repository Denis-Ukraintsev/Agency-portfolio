import AboutHeader from "../about/AboutHeader";
import { Router } from "@reach/router";
import BlogHeader from "../blog/BlogHeader";
import ServicesHeader from "../services/ServicesHeader";
import PricingHeader from "../pricing/PricingHeader";

export default function Description() {
  return (
    <Router>
      <AboutHeader path="/about" />
      <BlogHeader path="/blog" />
      <ServicesHeader path="/services" />
      <PricingHeader path="/pricing" />
    </Router>
  );
}
