import styles from './IconAligner.module.scss';

export default function IconAligner({children}) {
  return (
    <span className={styles.IconAligner}>
      {children}
    </span>
  );
}
