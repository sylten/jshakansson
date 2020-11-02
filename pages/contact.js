import Layout from '../common/layout/Layout';
import BackButton from '../common/components/BackButton';
import Logo from '../common/components/Logo';
import styles from '../styles/Contact.module.scss'

export default function Contact() {
  return (
   <Layout>
     <div className={styles.contact}>
        <h1>Contact me</h1>
        <p>Send me a message or email if I managed to pique your interest!</p>
        <ul className={styles.contactOptions}>
            <li><a href="https://www.linkedin.com/in/jonas-siltamäki-håkansson-9a065273" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            <li><a href="mailto:jonas@jshakansson.se" target="_blank"><i className="fal fa-envelope"></i> jonas@jshakansson.se</a></li>
        </ul>

        <p className={styles.address}>
            <span className="company-name">J.S. Håkansson, AB</span>
            <span>Hemslöjdsvägen 22</span>
            <span>16731 Bromma, Sweden</span>
        </p>

        <BackButton></BackButton>

        <div className="logoContainer">
            <Logo></Logo>
        </div>
    </div>
   </Layout>
  )
}
