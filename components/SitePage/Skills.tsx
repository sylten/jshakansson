import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import styles from "./Skills.module.scss";

const sectionVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

interface SkillCategory {
  label: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Full Stack Development",
    skills: ["React", "Angular", "JavaScript", "TypeScript", ".Net", "C#"]
  },
  {
    label: "System Architecture",
    skills: ["Microservices", "API Design", "Module Federation"]
  },
  {
    label: "Databases",
    skills: ["SQL", "Document"]
  },
  {
    label: "DevOps & CI/CD",
    skills: ["Azure DevOps", "GitHub Actions", "Docker"]
  },
  {
    label: "AI / LLM",
    skills: ["RAG", "MCP", "OpenAI", "Azure AI"]
  }
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className={styles.skills}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariant}
    >
      <div className={styles.inner}>
        <SectionTitle title="Skills" />
        <div className={styles.grid}>
          {SKILL_CATEGORIES.map(cat => (
            <div key={cat.label} className={styles.category}>
              <h3 className={styles.categoryLabel}>{cat.label}</h3>
              {cat.skills.length > 0 && (
                <div className={styles.pillList}>
                  {cat.skills.map(s => (
                    <span key={s} className={styles.pill}>{s}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
