import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
  return (
    <div className={styles.sectionTitle} id={id}>
      <div className={styles.titleRow}>
        <span className={styles.rule} aria-hidden="true" />
        <span className={styles.inner}>
          <span className={styles.diamond} aria-hidden="true">◆</span>
          <h2 className={styles.heading}>{title}</h2>
          <span className={styles.diamond} aria-hidden="true">◆</span>
        </span>
        <span className={styles.rule} aria-hidden="true" />
      </div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
