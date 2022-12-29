import styles from './Footer.module.scss';
import { IoLogoLinkedin } from 'react-icons/io';
import IconAligner from '../components/IconAligner';

export default function Footer(props) {
  const year = new Date().getFullYear();

  return (
    <div className={`${styles.footer} ${props.isLanding ? styles.isLanding : ''}`}>
      <footer className="no-print">
        <span className={styles.copyright}>&copy; {year} J.S. Håkansson AB</span>
        <span className="social">
          <a href="https://www.linkedin.com/in/jonas-siltamaki-hakansson" target="_blank">
            <IconAligner><IoLogoLinkedin size={"1.25rem"} /> LinkedIn</IconAligner>
          </a>
        </span>
      </footer>
    </div>
  );
}
