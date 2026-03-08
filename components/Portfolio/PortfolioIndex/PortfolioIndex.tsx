"use client";
import { motion } from "framer-motion";
import BackButton from "../../common/BackButton";
import PortfolioItem from "./PortfolioItem";
import styles from "./PortfolioIndex.module.scss";
import { portfolioItems } from "../portfolioItems";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function PortfolioIndex() {
  return (
    <div className={styles.portfolioIndex}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.utilRow}>
          <BackButton />
        </div>
        <p className={styles.eyebrow}>Work & Side projects</p>
        <h1 className={styles.heading}>Portfolio</h1>
        <p className={styles.subheading}>
          A collection of personal and professional projects that I&lsquo;ve worked on.
        </p>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {portfolioItems.map(item => (
          <motion.div key={item.uniqueName} variants={itemVariants}>
            <PortfolioItem item={item} />
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.utilRow}>
        <BackButton />
      </div>
    </div>
  );
}
