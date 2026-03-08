"use client";
import styles from "./PortfolioItemShowcase.module.scss";
import { PortfolioItem, MediaType } from "../portfolioItems";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronLeft, FiExternalLink } from "react-icons/fi";

interface PortfolioItemShowcaseProps {
  item: PortfolioItem;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const PortfolioItemShowcase: React.FC<PortfolioItemShowcaseProps> = ({ item }) => {
  const descriptionParagraphs = item.description.split("<br>");

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className={styles.content}
        >
          <motion.div variants={fadeUp} className={styles.backRow}>
            <Link href="/portfolio" className={styles.backLink}>
              <FiChevronLeft size="1rem" aria-hidden="true" />
              Back to portfolio
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.header}>
            {item.itemLogo && (
              <div className={styles.logoWrapper}>
                <Image
                  src={item.itemLogo.url}
                  alt={item.name}
                  width={item.itemLogo.width}
                  height={item.itemLogo.height}
                  className={styles.logo}
                />
              </div>
            )}
            <h1 className={styles.title}>{item.name}</h1>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.meta}>
            <div className={styles.companies}>
              {item.companies.map(company => (
                <span key={company.name} className={styles.company}>
                  {company.name}
                </span>
              ))}
            </div>
            <div className={styles.tech}>
              {item.tech.map(name => (
                <span key={name} className={styles.tag}>{name}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.description}>
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

          {item.url && (
            <motion.div variants={fadeUp} className={styles.cta}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={styles.btnPrimary}
              >
                {item.urlButtonText || "View project"}
                <FiExternalLink size="1rem" aria-hidden="true" />
              </a>
            </motion.div>
          )}

          {item.largeMedia.type === MediaType.Image && (
            <motion.div variants={fadeUp} className={styles.media}>
              <Image
                src={item.largeMedia.url}
                alt={`${item.name} preview`}
                width={item.largeMedia.width}
                height={item.largeMedia.height}
                className={styles.mediaImage}
                priority
              />
            </motion.div>
          )}

          {item.largeMedia.type === MediaType.YouTube && (
            <motion.div variants={fadeUp} className={styles.videoWrapper}>
              <iframe
                src={"https://www.youtube.com/embed/" + item.largeMedia.url}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={item.name}
              />
            </motion.div>
          )}

          {item.largeMedia.type === MediaType.Vimeo && (
            <motion.div variants={fadeUp} className={styles.videoWrapper}>
              <iframe
                src={"https://player.vimeo.com/video/" + item.largeMedia.url}
                allowFullScreen
                title={item.name}
              />
            </motion.div>
          )}

          {item.largeMedia.type === MediaType.GoogleDrive && (
            <motion.div variants={fadeUp} className={styles.videoWrapper}>
              <iframe
                src={"https://drive.google.com/file/d/" + item.largeMedia.url + "/preview"}
                allowFullScreen
                title={item.name}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioItemShowcase;
