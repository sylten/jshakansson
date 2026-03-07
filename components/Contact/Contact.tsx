import BackButton from "../common/BackButton";
import styles from "./Contact.module.scss";
import { IoLogoLinkedin } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact me</h1>
      <p>If I&lsquo;ve managed to pique your interest, you&lsquo;re welcome to email or message me!</p>
      <ul className={styles.contactOptions}>
        <li>
          <a href="https://www.linkedin.com/in/jonas-siltamaki-hakansson" target="_blank" rel="noreferrer">
            <IoLogoLinkedin size={"1.25rem"} /> LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:jonas@jshakansson.se" target="_blank" rel="noreferrer">
            <BsEnvelope size={"1.25rem"} /> jonas@jshakansson.se
          </a>
        </li>
      </ul>

      <p className={styles.address}>
        <span>J.S. Håkansson AB</span>
        <span>Ernst Ahlgrens väg 10</span>
        <span>11255 Stockholm, Sweden</span>
      </p>

      <BackButton></BackButton>
    </div>
  );
}
