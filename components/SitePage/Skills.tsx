"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.scss";

const skillGroups = [
  {
    category: "Full Stack Development",
    skills: ["React", "Angular", "JavaScript", "TypeScript", ".Net", "C#", "Next.js", "Node.js"]
  },
  {
    category: "Architecture & Infrastructure",
    skills: ["System Architecture", "Micro Frontends", "Module Federation", "Service Fabric", "Azure", "AWS"]
  },
  {
    category: "Databases",
    skills: ["SQL", "Document DB", "DynamoDB", "SQL Server"]
  },
  {
    category: "DevOps & Tooling",
    skills: ["DevOps", "CI/CD", "Azure DevOps", "Vercel"]
  },
  {
    category: "AI / Machine Learning",
    skills: ["AI / LLM", "RAG", "MCP", "OpenAI", "Chatbot"]
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

const groupVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section} aria-label="Skills">
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>Expertise</p>
          <h2 className={styles.heading}>
            Skills &amp;{" "}
            <span className={styles.gradientText}>Technologies</span>
          </h2>
        </motion.div>

        <div className={styles.groups}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className={styles.group}
              variants={groupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: gi * 0.05 }}
            >
              <h3 className={styles.groupLabel}>{group.category}</h3>
              <motion.div
                className={styles.tagCloud}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {group.skills.map(skill => (
                  <motion.span
                    key={skill}
                    className={styles.skillTag}
                    variants={tagVariants}
                    whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
