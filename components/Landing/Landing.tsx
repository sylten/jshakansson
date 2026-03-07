import styles from "./Landing.module.scss";
import Link from "next/link";
import ProfilePicture from "../ProfilePicture";

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Jonas Siltamäki Håkansson</h1>
          <p className={styles.role}>Software Engineering Consultant</p>
          <p className={styles.bio}>
            Proficient in system architecture, full-stack development and AI implementations.
            I have worked with small and large teams at both startups and larger companies.
          </p>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.profilePic}>
            <ProfilePicture />
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.navigation}>
        <ul>
          <li>
            <Link href="/portfolio">
              <span className={styles.navLabel}>Portfolio</span>
              <span className={styles.navDesc}>Personal &amp; professional projects</span>
              <span className={styles.navArrow}>→</span>
            </Link>
          </li>
          <li>
            <Link href="/cv">
              <span className={styles.navLabel}>CV</span>
              <span className={styles.navDesc}>Experience &amp; education</span>
              <span className={styles.navArrow}>→</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className={styles.navLabel}>Contact</span>
              <span className={styles.navDesc}>Get in touch</span>
              <span className={styles.navArrow}>→</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
