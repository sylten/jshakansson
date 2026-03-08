import Head from "next/head";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import CvTimeline from "./CvTimeline";
import ContactSection from "./ContactSection";
import CursorGlow from "./CursorGlow";
import styles from "./SitePage.module.scss";

export default function SitePage() {
  return (
    <>
      <Head>
        <title>J.S. Håkansson — Software Engineering Consultant</title>
        <meta
          name="description"
          content="Software engineering consultant with a business mindset and experience in system architecture, full-stack development and AI implementations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <CvTimeline />
          <ContactSection />
        </main>
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <span className={styles.footerCopy}>
              © {new Date().getFullYear()} J.S. Håkansson AB
            </span>
            <a
              href="https://www.linkedin.com/in/jonashaakansson/"
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </footer>
        <CursorGlow />
      </div>
    </>
  );
}
