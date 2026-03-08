"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./CvTimeline.module.scss";

const experience = [
  {
    company: "Digilog",
    role: "Co-Founder",
    period: "2025–",
    skills: "Next.js, React, Node, AWS, DynamoDB, S3, AI",
    points: [
      "Co-founded Digilog, an AI-first platform for managing CE documentation for automated doors.",
      "Led product development and business strategy with a focus on AI-driven automation to minimise manual documentation work.",
      "Built web interfaces for installers and property owners, with AI-assisted documentation generation."
    ]
  },
  {
    company: "Elgiganten",
    role: "Full Stack Developer",
    period: "2022–2025",
    skills: "React, Next.js, Node, TypeScript, .Net, C#, Kafka, Tailwind CSS, AI, LLM, RAG, MCP",
    points: [
      "Self service applications for customers",
      "Chatbot integrations",
      "Genesys Cloud plugins including an AI Email Assistant",
      "Various other internal tools and experimentation with a focus on AI",
      "Coaching of junior developers"
    ]
  },
  {
    company: "Insclear",
    role: "Full Stack Developer",
    period: "2019–2022",
    skills: "Angular, .Net, Service Fabric, Azure DevOps, SQL, CI/CD, DevOps",
    points: [
      "Various projects to streamline administration processes and interfaces, to minimize errors and make administration more efficient. Worked on requirements engineering, architecture, design of interfaces and web development.",
      "Migration of a monolithic frontend application to a micro frontend based architecture using module federation. Helped with initial research and requirements analysis, architecture, web development and documentation."
    ]
  },
  {
    company: "SEB",
    role: "Solutions Developer / Designer",
    period: "2018–2019",
    skills: "Angular, .Net, SQL, Azure DevOps, Software architecture, IBM Api Connect",
    points: [
      "Solution design and engineering on a project to modernise the architecture of the systems handling settlement of securities, while also making SEB compliant in CSDR. Delivered an API for securities settlement and a web-based GUI for administration."
    ]
  },
  {
    company: "Tattoomigo",
    role: "Co-Founder & Developer",
    period: "2017–2018",
    skills: "React, Node, TypeScript, .Net Core, SQL, Azure",
    points: [
      "Web development including architecture, programming, UX and design.",
      "Supervision of two engineering students doing their examination work at Tattoomigo.",
      "Helped develop the initial idea into a sustainable business model. Also helped with branding."
    ]
  },
  {
    company: "Signe.io",
    role: "Co-Founder & Developer",
    period: "2016–2017",
    skills: "React, Node, JavaScript, SQL, Stripe",
    points: [
      "Development of a prototype version of the platform using Node, MySQL, React and Stripe as a payment service provider.",
      "Development of the business model, logistics and branding."
    ]
  },
  {
    company: "Skandikon",
    role: "Full Stack Developer",
    period: "2014–2015",
    skills: ".Net, C#, SQL, JavaScript",
    points: [
      "Systems development, full stack development of a system for handling pensions."
    ]
  },
  {
    company: "Plan 8 Production",
    role: "Web Developer",
    period: "2013–2014",
    skills: "JavaScript, TypeScript, Node, SQL, PHP, AWS",
    points: [
      "Continuation of development of my school examination project Klang, which was used in collaboration with clients such as Google, H&M, Mercedes, HBO and many more.",
      "Full stack development of a cloud based system for handling audio files and adding music and sound to interactive websites.",
      "Various interactive web apps."
    ]
  }
];

const education = [
  {
    institution: "KTH Royal Institute of Technology",
    degree: "Bachelor's Degree, Computer Science",
    period: "2010–2013"
  },
  {
    institution: "Stockholm University",
    degree: "Bachelor's Degree, Business Administration and Management",
    period: "2015–2018"
  },
  {
    institution: "The Chinese University of Hong Kong Business School",
    degree: "Exchange term, Managerial Economics",
    period: "2017"
  }
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function CvTimeline() {
  return (
    <section id="cv" className={styles.section} aria-label="CV and Resume">
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>Experience</p>
          <h2 className={styles.heading}>
            Career{" "}
            <span className={styles.gradientText}>Timeline</span>
          </h2>
          <p className={styles.subheading}>
            My professional journey as a software engineering consultant.
          </p>
        </motion.div>

        <div className={styles.columns}>
          <div className={styles.mainCol}>
            <h3 className={styles.colTitle}>Work Experience</h3>
            <div className={styles.timeline}>
              {experience.map((item, i) => (
                <motion.div
                  key={item.company}
                  className={styles.timelineItem}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className={styles.dot} aria-hidden="true" />
                  <div className={styles.itemContent}>
                    <div className={styles.itemHeader}>
                      <h4 className={styles.company}>{item.company}</h4>
                      <span className={styles.period}>{item.period}</span>
                    </div>
                    <p className={styles.role}>{item.role}</p>
                    <p className={styles.skills}>{item.skills}</p>
                    <ul className={styles.points}>
                      {item.points.map((p, pi) => (
                        <li key={pi}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.sideCol}>
            <h3 className={styles.colTitle}>Education</h3>
            <div className={styles.eduList}>
              {education.map((item, i) => (
                <motion.div
                  key={item.institution}
                  className={styles.eduItem}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className={styles.eduPeriod}>{item.period}</span>
                  <h4 className={styles.eduInstitution}>{item.institution}</h4>
                  <p className={styles.eduDegree}>{item.degree}</p>
                </motion.div>
              ))}
            </div>

            <div className={styles.cvActions}>
              <Link href="/cv" className={styles.cvLink}>
                Full CV
                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
