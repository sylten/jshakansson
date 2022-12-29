import styles from './Footer.module.scss';
import { IoLogoLinkedin } from 'react-icons/io';
import IconAligner from '../components/IconAligner';

interface FooterProps {
  isLanding?: boolean;
}

const Footer: React.FC<FooterProps> = ({isLanding}) => {
  const year = new Date().getFullYear();

  return (
    <div className={`${styles.footer} ${isLanding ? styles.isLanding : ''}`}>
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

export default Footer;
