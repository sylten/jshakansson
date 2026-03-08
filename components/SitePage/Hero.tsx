"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="hero" className={styles.hero} ref={ref} aria-label="Introduction">
      {/* Parallax blobs */}
      <motion.div className={`${styles.blob} ${styles.blob1}`} style={{ y: blobY1 }} aria-hidden="true" />
      <motion.div className={`${styles.blob} ${styles.blob2}`} style={{ y: blobY2 }} aria-hidden="true" />
      <motion.div className={`${styles.blob} ${styles.blob3}`} style={{ y: blobY1 }} aria-hidden="true" />

      <motion.div className={styles.content} style={{ y: textY }}>
        <motion.div
          className={styles.textGroup}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={itemVariants}>
            Software Engineering Consultant
          </motion.p>

          <motion.h1 className={styles.name} variants={itemVariants}>
            Jonas Siltamäki<br />
            <span className={styles.gradientName}>Håkansson</span>
          </motion.h1>

          <motion.p className={styles.tagline} variants={itemVariants}>
            Business mindset and experience in system architecture, full-stack development and AI implementations.
            Working with small and large teams at startups and enterprise alike.
          </motion.p>

          <motion.div className={styles.actions} variants={itemVariants}>
            <a href="#projects" className={styles.btnPrimary}>
              View Projects
              <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
            <a href="#cv" className={styles.btnSecondary}>
              See CV
            </a>
          </motion.div>

          <motion.div className={styles.badges} variants={itemVariants}>
            {["React", "Next.js", "TypeScript", ".NET", "AI / LLM", "Node.js"].map(tech => (
              <span key={tech} className={styles.badge}>{tech}</span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <div className={styles.scrollHint} aria-hidden="true">
        <motion.div
          className={styles.scrollDot}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
