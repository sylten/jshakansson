"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "../Portfolio/portfolioItems";
import styles from "./Projects.module.scss";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Projects() {
  return (
    <section id="projects" className={styles.section} aria-label="Projects">
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headingVariants}
        >
          <p className={styles.eyebrow}>Work &amp; Projects</p>
          <h2 className={styles.heading}>
            Things I&apos;ve{" "}
            <span className={styles.gradientText}>built</span>
          </h2>
          <p className={styles.subheading}>
            A collection of personal and professional projects I&apos;ve worked on.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {portfolioItems.map(item => (
            <motion.div
              key={item.uniqueName}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <Link href={`/portfolio/${item.uniqueName}`} className={styles.cardLink} aria-label={`View ${item.name}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.smallMedia.url}
                    alt={`${item.name} preview`}
                    width={item.smallMedia.width}
                    height={item.smallMedia.height}
                    className={styles.image}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.year}>{item.year}</span>
                    <div className={styles.companies}>
                      {item.companies.map(c => (
                        <span key={c.name} className={styles.company}>{c.name}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                  <p className={styles.cardIntro}>{item.intro}</p>
                  <div className={styles.techTags}>
                    {item.tech.slice(0, 5).map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                    {item.tech.length > 5 && (
                      <span className={styles.tagMore}>+{item.tech.length - 5}</span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.viewAll}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/portfolio" className={styles.viewAllLink}>
            View all projects
            <span aria-hidden="true"> →</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
