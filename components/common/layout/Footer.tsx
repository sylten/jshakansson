import styles from "./Footer.module.scss";
import { IoLogoLinkedin } from "react-icons/io";
import IconAligner from "../IconAligner";
import { useTheme, Theme } from "../../../contexts/ThemeContext";
import { useState, useEffect } from "react";

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
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  if (theme === "win95") {
    return (
      <div className={`${styles.win95Taskbar} no-print`} role="toolbar" aria-label="Windows 95 Taskbar">
        <button className={styles.win95StartBtn} aria-label="Start">
          <span className={styles.startIcon} aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 16 16">
              <rect x="0" y="0" width="7" height="7" fill="#ff0000" />
              <rect x="9" y="0" width="7" height="7" fill="#00b000" />
              <rect x="0" y="9" width="7" height="7" fill="#0000ff" />
              <rect x="9" y="9" width="7" height="7" fill="#ffff00" />
            </svg>
          </span>
          <strong>Start</strong>
        </button>

        <div className={styles.win95TaskbarDivider} aria-hidden="true" />

        <div className={styles.win95ThemePicker}>
          {THEMES.map(({ id, label, icon }) => (
            <button
              key={id}
              className={`${styles.win95TaskBtn} ${theme === id ? styles.win95TaskBtnActive : ""}`}
              onClick={() => setTheme(id)}
              aria-pressed={theme === id}
              title={label}
            >
              {icon} {label}
            </button>
          ))}
        </div>

        <div className={styles.win95Tray}>
          <a
            className={styles.win95TrayBtn}
            href="https://www.linkedin.com/in/jonas-siltamaki-hakansson"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <IoLogoLinkedin size={"1rem"} />
          </a>
          <div className={styles.win95Clock} aria-live="polite">{time}</div>
        </div>
      </div>
    );
  }

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
