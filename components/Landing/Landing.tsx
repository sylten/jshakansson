import styles from "./Landing.module.scss";
import Link from "next/link";
import ProfilePicture from "../ProfilePicture";

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.topAccent}></div>

      <div className={styles.hero}>
        <div className={styles.profileFrame}>
          <ProfilePicture />
        </div>

        <div className={styles.nameBlock}>
          <h1>Jonas Siltamäki Håkansson</h1>
          <div className={styles.rule}>
            <span className={styles.line}></span>
            <span className={styles.diamond}></span>
            <span className={styles.line}></span>
          </div>
        </div>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/cv">CV</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className={styles.ornament}>
        <div className={styles.ornLine}></div>
        <div className={styles.ornCenter}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.ornLine}></div>
      </div>
    </div>
  );
}
