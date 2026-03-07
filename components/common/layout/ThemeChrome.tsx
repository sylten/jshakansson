import { useTheme } from "../../../contexts/ThemeContext";
import styles from "./ThemeChrome.module.scss";

const EQ_BARS = 28;

export default function ThemeChrome() {
  const { theme } = useTheme();

  if (theme === "winamp") {
    return (
      <div className={`${styles.winampChrome} no-print`} role="banner" aria-label="Winamp player">
        <div className={styles.titlebar}>
          <div className={styles.logo}>
            <span className={styles.logoW}>W</span>
            <span className={styles.logoRest}>inamp</span>
          </div>
          <div className={styles.winBtns}>
            <button className={styles.winBtn} aria-label="Minimize">_</button>
            <button className={styles.winBtn} aria-label="Shade">■</button>
            <button className={`${styles.winBtn} ${styles.winBtnClose}`} aria-label="Close">×</button>
          </div>
        </div>
        <div className={styles.display}>
          <div className={styles.lcd}>
            <div className={styles.scroll}>
              <span>Jonas Siltamäki Håkansson ● Software Engineering Consultant ● jshakansson.se ● </span>
              <span aria-hidden="true">Jonas Siltamäki Håkansson ● Software Engineering Consultant ● jshakansson.se ● </span>
            </div>
          </div>
          <div className={styles.sideMeta}>
            <span className={styles.kbps}>320</span>
            <span className={styles.kbpsLabel}>kbps</span>
          </div>
        </div>
        <div className={styles.eqRow} aria-hidden="true">
          {Array.from({ length: EQ_BARS }).map((_, i) => (
            <div key={i} className={styles.bar} />
          ))}
        </div>
        <div className={styles.transport}>
          <button className={styles.tBtn} aria-label="Previous">⏮</button>
          <button className={`${styles.tBtn} ${styles.tPlay}`} aria-label="Play">▶</button>
          <button className={styles.tBtn} aria-label="Pause">⏸</button>
          <button className={styles.tBtn} aria-label="Stop">⏹</button>
          <button className={styles.tBtn} aria-label="Next">⏭</button>
          <div className={styles.vol}>
            <span className={styles.volLabel}>VOL</span>
            <div className={styles.volTrack}>
              <div className={styles.volFill} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === "win95") {
    return (
      <div className={`${styles.win95Bar} no-print`} role="banner">
        <span className={styles.win95Icon} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 16 16">
            <rect x="0" y="0" width="7" height="7" fill="#ff0000" />
            <rect x="9" y="0" width="7" height="7" fill="#00b000" />
            <rect x="0" y="9" width="7" height="7" fill="#0000ff" />
            <rect x="9" y="9" width="7" height="7" fill="#ffff00" />
          </svg>
        </span>
        <span className={styles.win95Title}>Jonas Siltamäki Håkansson – Portfolio</span>
        <div className={styles.win95Btns}>
          <button className={styles.win95Btn} aria-label="Minimize">_</button>
          <button className={styles.win95Btn} aria-label="Maximize">□</button>
          <button className={`${styles.win95Btn} ${styles.win95Close}`} aria-label="Close">✕</button>
        </div>
      </div>
    );
  }

  return null;
}
