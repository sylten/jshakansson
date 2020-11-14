import styles from './Footer.module.scss';

export default function Footer(props) {
  const year = new Date().getFullYear();

  return (
    <div className={`${styles.footer} ${props.isLanding ? styles.isLanding : ''}`}>
      <footer className="no-print">
        <span className={styles.copyright}>&copy; {year} AB J.S. Håkansson</span>
        <span className="social">
          <a href="https://www.linkedin.com/in/jonas-siltamäki-håkansson-9a065273" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </span>
      </footer>
    </div>
  );
}
