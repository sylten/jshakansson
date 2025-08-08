import styles from "./Landing.module.scss";
import Link from "next/link";
import ProfilePicture from "../ProfilePicture";

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.profileAbove}><ProfilePicture /></div>

          <div>
            <h1>Jonas Siltamäki Håkansson</h1>
            <p>
              Software engineering consultant with a business mindset and experience in system architecture, full-stack development and AI implementations.
              I have worked with small and large teams at both startups and larger companies.
            </p>
          </div>

          <div className={styles.profileRight}><ProfilePicture /></div>
        </div>

      </div>

      <div className={styles.navigation}>
        <ul>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/cv">CV</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className={styles.line}></div>
    </div>
  );
}
