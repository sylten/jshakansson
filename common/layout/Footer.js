import styles from './Footer.module.scss';

export default function Footer(props) {
  const year = new Date().getFullYear();

  return (
    <div className={`${styles.footer} ${props.isLanding ? styles.isLanding : ''}`}>
      <footer className="no-print">
        <span className={styles.copyright}>&copy; {year} J.S. Håkansson AB</span>
        <span className="social">
          <a href="https://www.linkedin.com/in/jonas-siltamaki-hakansson" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </span>
      </footer>
    </div>
  );
}
