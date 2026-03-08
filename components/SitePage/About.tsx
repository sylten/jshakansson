import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import styles from "./About.module.scss";

const sectionVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  return (
    <motion.section
      id="about"
      className={styles.about}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariant}
    >
      <div className={styles.inner}>
        <SectionTitle title="About" />
        <div className={styles.content}>
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <Image
                src="/jonas-min.jpg"
                alt="Jonas Siltamäki Håkansson"
                width={400}
                height={400}
                className={styles.profileImage}
                priority
              />
            </div>
          </div>
          <div className={styles.textCol}>
            <p className={styles.bio}>
              Born and raised in Stockholm. I grew up with an interest in both technology
              and languages. I have studied computer science, linguistics and Chinese at KTH
              (Royal Institute of Technology), Stockholm University and The Chinese University
              of Hong Kong, as a part of an exchange program.
            </p>
            <p className={styles.bio}>
              I have developed a passion for entrepreneurship over the years, having been a
              co-founder of multiple startups.
            </p>
            <blockquote className={styles.pullQuote}>
              &ldquo;I love building things and I&apos;m never far away from trying something new.&rdquo;
            </blockquote>
            <p className={styles.bio}>
              Outside of tech: I do martial arts (Brazilian Jiu Jitsu) and outdoor activities.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
