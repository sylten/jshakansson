import Layout from "../components/common/layout/Layout";
import CursorGlow from "../components/SitePage/CursorGlow";
import Navbar from "../components/SitePage/Navbar";
import Hero from "../components/SitePage/Hero";
import Projects from "../components/SitePage/Projects";
import Skills from "../components/SitePage/Skills";
import CvTimeline from "../components/SitePage/CvTimeline";
import About from "../components/SitePage/About";
import ContactSection from "../components/SitePage/ContactSection";

export default function LandingPage() {
  return (
    <Layout isLanding={true}>
      <CursorGlow />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <CvTimeline />
      <About />
      <ContactSection />
    </Layout>
  );
}
