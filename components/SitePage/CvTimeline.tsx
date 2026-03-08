import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import styles from "./CvTimeline.module.scss";

const sectionVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

interface TimelineEntry {
  company: string;
  role: string;
  period: string;
  tech?: string;
  description?: string;
}

interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
}

const EXPERIENCE: TimelineEntry[] = [
  {
    company: "Digilog",
    role: "Co-Founder",
    period: "2025–",
    tech: "Next.js, React, Node, AWS, Dynamo DB, S3",
    description: "Co-founder, AI-first software development and business development of Digilog, a two-way asset management platform for doors."
  },
  {
    company: "Elgiganten",
    role: "Full Stack Developer",
    period: "2022–2025",
    tech: "React, Next.js, Node, TypeScript, .Net, C#, Kafka, Tailwind CSS, AI, LLM, RAG, MCP",
    description: "System development and architecture related to: Self service applications for customers, Chatbot integrations, Genesys Cloud plugins including an AI Email Assistant, Various other internal tools and experimentation with a focus on AI, And some coaching of junior developers."
  },
  {
    company: "Insclear",
    role: "Full Stack Developer",
    period: "2019–2022",
    tech: "Angular, .Net, Service Fabric, Azure DevOps, SQL, CI/CD, DevOps",
    description: "Various projects to streamline administration processes and interfaces. Migration of a monolithic frontend application to a micro frontend based architecture."
  },
  {
    company: "SEB",
    role: "Solutions Developer / Designer",
    period: "2018–2019",
    tech: "Angular, .Net, SQL, Azure DevOps, Software architecture, IBM Api Connect",
    description: "Solution design and engineering for a project to modernise the architecture of the systems handling settlement of securities, while making SEB compliant in CSDR."
  },
  {
    company: "Tattoomigo",
    role: "Co-Founder & Developer",
    period: "2017–2018",
    tech: "React, Node, TypeScript, .Net Core, SQL, Azure",
    description: "Web development including architecture, programming, UX and design. Supervision of two engineering students."
  },
  {
    company: "Signe.io",
    role: "Co-Founder & Developer",
    period: "2016–2017",
    tech: "React, Node, JavaScript, SQL, Stripe",
    description: "Development of a prototype version of the platform. Development of the business model, logistics and branding."
  },
  {
    company: "Skandikon",
    role: "Full Stack Developer",
    period: "2014–2015"
  },
  {
    company: "Plan 8 Production",
    role: "Web Developer",
    period: "2013–2014"
  }
];

const EDUCATION: EducationEntry[] = [
  {
    institution: "KTH (Royal Institute of Technology)",
    degree: "Computer Science, B.Sc.",
    period: "2009–2013"
  },
  {
    institution: "The Chinese University of Hong Kong",
    degree: "Exchange Student",
    period: "2011–2012"
  },
  {
    institution: "Stockholm University",
    degree: "Linguistics",
    period: "2013–2014"
  }
];

export default function CvTimeline() {
  return (
    <motion.section
      id="cv"
      className={styles.cv}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariant}
    >
      <div className={styles.inner}>
        <SectionTitle title="CV" subtitle="Experience & Education" />
        <div className={styles.layout}>
          <div className={styles.timeline}>
            <div className={styles.timelineBlock}>
              <h3 className={styles.blockTitle}>Experience</h3>
              {EXPERIENCE.map(entry => (
                <div key={`${entry.company}-${entry.period}`} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <span className={styles.company}>{entry.company}</span>
                    <span className={styles.period}>{entry.period}</span>
                  </div>
                  <p className={styles.role}>{entry.role}</p>
                  {entry.tech && (
                    <p className={styles.tech}>{entry.tech}</p>
                  )}
                  {entry.description && (
                    <p className={styles.description}>{entry.description}</p>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.timelineBlock}>
              <h3 className={styles.blockTitle}>Education</h3>
              {EDUCATION.map(entry => (
                <div key={`${entry.institution}-${entry.period}`} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <span className={styles.company}>{entry.institution}</span>
                    <span className={styles.period}>{entry.period}</span>
                  </div>
                  <p className={styles.role}>{entry.degree}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.sidebarBlock}>
              <h3 className={styles.sidebarTitle}>Download</h3>
              <a
                href="/jonas-siltamaki-hakansson-cv.pdf"
                className={styles.downloadBtn}
                download
              >
                CV as PDF ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
