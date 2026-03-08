import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";
import SectionTitle from "./SectionTitle";
import styles from "./ContactSection.module.scss";

const sectionVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className={styles.contact}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariant}
    >
      <div className={styles.inner}>
        <SectionTitle title="Get In Touch" />
        <div className={styles.frame}>
          <p className={styles.intro}>
            I&apos;m always open to discussing new projects, opportunities or partnerships.
          </p>
          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/jonashaakansson/"
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <IoLogoLinkedin className={styles.icon} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:jonas@jshakansson.se"
              className={styles.contactLink}
              aria-label="Email jonas@jshakansson.se"
            >
              <BsEnvelope className={styles.icon} aria-hidden="true" />
              <span>jonas@jshakansson.se</span>
            </a>
          </div>
          <p className={styles.company}>
            J.S. Håkansson AB — Stockholm, Sweden
          </p>
        </div>
      </div>
    </motion.section>
  );
}
