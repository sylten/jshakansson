import BackButton from "../common/BackButton";
import styles from "./Contact.module.scss";
import { IoLogoLinkedin } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";
import IconAligner from "../common/IconAligner";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <div className={styles.rule}>
        <span className={styles.ruleLine}></span>
        <span className={styles.ruleDiamond}></span>
        <span className={styles.ruleLine}></span>
      </div>
      <p>If I&lsquo;ve managed to pique your interest, you&lsquo;re welcome to email or message me!</p>
      <ul className={styles.contactOptions}>
        <li>
          <a href="https://www.linkedin.com/in/jonas-siltamaki-hakansson" target="_blank" rel="noreferrer">
            <IconAligner><IoLogoLinkedin size={"1em"} /> LinkedIn</IconAligner>
          </a>
        </li>
        <li>
          <a href="mailto:jonas@jshakansson.se" target="_blank" rel="noreferrer">
            <IconAligner><BsEnvelope size={"1em"} /> jonas@jshakansson.se</IconAligner>
          </a>
        </li>
      </ul>

      <p className={styles.address}>
        <span className={styles.companyName}>J.S. Håkansson AB</span>
        <span>Lundagatan 40A</span>
        <span>11727 Stockholm, Sweden</span>
      </p>

      <BackButton></BackButton>
    </div>
  );
}
