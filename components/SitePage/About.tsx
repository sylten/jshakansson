"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import jonasMin from "../../public/jonas-min.jpg";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.section} aria-label="About me">
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src={jonasMin}
                alt="Profile picture of Jonas Siltamäki Håkansson"
                width={320}
                height={320}
                className={styles.photo}
                priority
              />
              <div className={styles.imageBadge} aria-hidden="true">
                <span>👋</span>
              </div>
            </div>
          </div>

          <div className={styles.textCol}>
            <p className={styles.eyebrow}>About me</p>
            <h2 className={styles.heading}>
              Hi, I&apos;m{" "}
              <span className={styles.gradientText}>Jonas</span>
            </h2>

            <div className={styles.body}>
              <p>
                I am an entrepreneurial self-employed software engineer with
                experience of multiple industries, from music and marketing to
                banking and finance. My interest in web development started as
                an 11-year old, when I created a website for a game I played.
                Since then I&apos;ve obtained degrees in computer science and business
                administration, and have gained extensive knowledge working with
                software development and software architecture. I also still like to
                spend time on hobby programming projects. I&apos;ve had a lot of fun with Raspberry Pis.
              </p>
              <p>
                In addition to web development, finance and business are deep-rooted interests.
                I consume a lot of information on economics and financial news, and I&apos;ve
                enjoyed co-founding multiple startups. I also enjoy reading, running and cooking.
              </p>
            </div>

            <div className={styles.highlights}>
              {[
                { label: "10+", desc: "Years of experience" },
                { label: "2", desc: "Startups co-founded" },
                { label: "2", desc: "University degrees" }
              ].map(h => (
                <div key={h.label} className={styles.highlight}>
                  <span className={styles.highlightNumber}>{h.label}</span>
                  <span className={styles.highlightDesc}>{h.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
