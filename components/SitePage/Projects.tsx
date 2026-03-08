import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { portfolioItems } from "../Portfolio/portfolioItems";
import styles from "./Projects.module.scss";

const sectionVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className={styles.projects}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariant}
    >
      <div className={styles.inner}>
        <SectionTitle title="Portfolio" subtitle="Selected work and projects" />
        <div className={styles.grid}>
          {portfolioItems.map(item => (
            <div key={item.uniqueName} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <Image
                  src={item.smallMedia.url}
                  alt={item.name}
                  width={item.smallMedia.width}
                  height={item.smallMedia.height}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.year}>{item.year}</span>
                </div>
                <h3 className={styles.cardName}>{item.name}</h3>
                <p className={styles.cardIntro}>{item.intro}</p>
                <div className={styles.techList}>
                  {item.tech.map(t => (
                    <span key={t} className={styles.techPill}>{t}</span>
                  ))}
                </div>
                {item.url && (
                  <a
                    href={item.url}
                    className={styles.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.urlButtonText || "View Project"} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
