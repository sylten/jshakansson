import styles from "./Footer.module.scss";
import { IoLogoLinkedin } from "react-icons/io";
import IconAligner from "../IconAligner";
import { useTheme, Theme } from "../../../contexts/ThemeContext";

interface FooterProps {
  isLanding?: boolean;
}

const THEMES: { id: Theme; label: string; icon: string }[] = [
  { id: "system", label: "Default", icon: "◎" },
  { id: "winamp", label: "Winamp", icon: "▶" },
  { id: "win95", label: "Win95", icon: "⊞" }
];

const Footer: React.FC<FooterProps> = ({ isLanding }) => {
  const year = new Date().getFullYear();
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${styles.footer} ${isLanding ? styles.isLanding : ""}`}>
      <footer className="no-print">
        <span className={styles.copyright}>&copy; {year} J.S. Håkansson AB</span>

        <span className={styles.themeSwitcher} aria-label="Theme">
          {THEMES.map(({ id, label, icon }) => (
            <button
              key={id}
              className={`${styles.themeBtn} ${theme === id ? styles.active : ""}`}
              onClick={() => setTheme(id)}
              aria-pressed={theme === id}
              title={label}
            >
              <span className={styles.themeBtnIcon}>{icon}</span>
              <span className={styles.themeBtnLabel}>{label}</span>
            </button>
          ))}
        </span>

        <span className="social">
          <a href="https://www.linkedin.com/in/jonas-siltamaki-hakansson" target="_blank" rel="noreferrer">
            <IconAligner><IoLogoLinkedin size={"1.25rem"} /> LinkedIn</IconAligner>
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
