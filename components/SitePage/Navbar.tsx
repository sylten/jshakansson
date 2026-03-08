import { ReactNode } from "react";
import styles from "./Navbar.module.scss";

const sections = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#cv", label: "CV" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo} aria-label="Go to top">
          JSH
        </a>
        <ul className={styles.links} role="list">
          {sections.map(s => (
            <li key={s.href}>
              <a href={s.href} className={styles.link}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
