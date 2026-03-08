"use client";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { BsEnvelope, BsTelephone, BsGlobe } from "react-icons/bs";
import styles from "./ContactSection.module.scss";

const contactLinks = [
  {
    href: "mailto:jonas@jshakansson.se",
    icon: <BsEnvelope size="1.25rem" />,
    label: "jonas@jshakansson.se",
    ariaLabel: "Send an email to Jonas"
  },
  {
    href: "https://www.linkedin.com/in/jonas-siltamaki-hakansson",
    icon: <IoLogoLinkedin size="1.25rem" />,
    label: "LinkedIn",
    ariaLabel: "Visit Jonas on LinkedIn",
    external: true
  },
  {
    href: "https://github.com/sylten",
    icon: <IoLogoGithub size="1.25rem" />,
    label: "GitHub — sylten",
    ariaLabel: "Visit Jonas on GitHub",
    external: true
  },
  {
    href: "https://jshakansson.se/",
    icon: <BsGlobe size="1.25rem" />,
    label: "jshakansson.se",
    ariaLabel: "Visit the website",
    external: true
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>Get in Touch</p>
          <h2 className={styles.heading}>
            Let&apos;s{" "}
            <span className={styles.gradientText}>connect</span>
          </h2>
          <p className={styles.subheading}>
            If I&apos;ve managed to pique your interest, you&apos;re welcome to email or message me!
          </p>
        </motion.div>

        <motion.div
          className={styles.linksGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {contactLinks.map(link => (
            <motion.a
              key={link.href}
              href={link.href}
              className={styles.contactCard}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              aria-label={link.ariaLabel}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className={styles.iconWrapper} aria-hidden="true">{link.icon}</span>
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.address
          className={styles.address}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <span className={styles.companyName}>J.S. Håkansson AB</span>
          <span>Ernst Ahlgrens väg 10</span>
          <span>11255 Stockholm, Sweden</span>
        </motion.address>
      </div>
    </section>
  );
}
