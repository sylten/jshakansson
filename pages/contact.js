import Layout from '../common/layout/Layout';
import BackButton from '../common/components/BackButton';
import Logo from '../common/components/Logo';
import styles from '../styles/Contact.module.scss'

export default function Contact() {
  return (
   <Layout>
     <div className={styles.contact}>
        <h1>Contact me</h1>
        <p>If I've managed to pique your interest, you're welcome to email or message me!</p>
        <ul className={styles.contactOptions}>
            <li><a href="https://www.linkedin.com/in/jonas-siltamaki-hakansson" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            <li><a href="mailto:jonas@jshakansson.se" target="_blank"><i className="fal fa-envelope"></i> jonas@jshakansson.se</a></li>
        </ul>

        <p className={styles.address}>
            <span className="company-name">J.S. Håkansson AB</span>
            <span>Ernst Ahlgrens väg 10</span>
            <span>11255 Stockholm, Sweden</span>
        </p>

        <BackButton></BackButton>

        <div className="logoContainer">
            <Logo></Logo>
        </div>
    </div>
   </Layout>
  )
}
