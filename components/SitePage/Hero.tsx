import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease, delay }
});

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>
        <motion.h1 className={styles.name} {...fadeUp(0)}>
          Jonas Siltamäki Håkansson
        </motion.h1>

        <motion.div className={styles.divider} {...fadeUp(0.08)} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.dividerDiamond}>◆</span>
          <span className={styles.dividerLine} />
        </motion.div>

        <motion.p className={styles.role} {...fadeUp(0.16)}>
          Software Engineering Consultant
        </motion.p>

        <motion.p className={styles.tagline} {...fadeUp(0.24)}>
          Software engineering consultant with a business mindset and experience in
          system architecture, full-stack development and AI implementations.
          I have worked with small and large teams at both startups and larger companies.
        </motion.p>

        <motion.div className={styles.cta} {...fadeUp(0.32)}>
          <a href="#projects" className={styles.ctaBtn}>Portfolio</a>
          <a href="#cv" className={styles.ctaBtn}>CV</a>
          <a href="#contact" className={styles.ctaBtn}>Contact</a>
        </motion.div>
      </div>
    </section>
  );
}
