import styles from "./CvSkills.module.scss";

export default function CvSkills() {
  return (
    <div className={styles.cvSkills}>
      <div className={styles.contact}>
        <h4>Skills</h4>
        <ul>
          <li>Full Stack Development
            <ul>
              <li>React</li>
              <li>Angular</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>.Net</li>
              <li>C#</li>
            </ul>
          </li>
          <li>System Architecture</li>
          <li>Databases
            <ul>
              <li>SQL</li>
              <li>Document</li>
            </ul>
          </li>
          <li>DevOps &amp; CI/CD</li>
          <li>
            AI/LLM
            <ul>
              <li>RAG</li>
              <li>MCP</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
