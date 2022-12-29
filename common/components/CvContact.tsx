import styles from './CvContact.module.scss';
import jonasMin from "../../public/jonas-min.jpg";
import Image from 'next/image';
import IconAligner from './IconAligner';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { BsFileEarmarkPdf, BsTelephone, BsEnvelope, BsGlobe } from 'react-icons/bs';

export default function CvContact() {
  return (
    <div className={styles.cvContact}>
      <div className={styles.profilePicture}>
          <Image src={jonasMin} alt="Profile picture of Jonas Siltamäki Håkansson" width={636} height={636} priority />
      </div>
      <div className={styles.contact}>
          <h4>Contact</h4>

          <p className={styles.website}>
              <a href="https://jshakansson.se/" target="blank">
                  <IconAligner><BsGlobe size={"1rem"} /> jshakansson.se</IconAligner>
              </a>
          </p>

          <p className="no-print">
              <a href="https://www.linkedin.com/in/jonas-siltamaki-hakansson" target="blank">
                  <IconAligner><IoLogoLinkedin size={"1rem"} /> LinkedIn</IconAligner>
              </a>
          </p>

          <p>
              <a href="https://github.com/sylten" target="blank">
                  <IconAligner><IoLogoGithub size={"1rem"} /> GitHub - sylten</IconAligner>
              </a>
          </p>

          <p>
              <a href="mailto:jonas@jshakansson.se" target="blank">
                  <IconAligner><BsEnvelope size={"1rem"} /> jonas@jshakansson.se</IconAligner>
              </a>
          </p>

          <p className={styles.phone}>
              <IconAligner><BsTelephone size={"1rem"} /> +46703078303</IconAligner>
          </p>

          <a className={styles.pdf + ' no-print'} href="/jonas-siltamaki-hakansson-cv.pdf" target="blank">
              <IconAligner><BsFileEarmarkPdf size={"1rem"} /> Pdf</IconAligner>
          </a>

          <p className={styles.address}>
              <span>J.S. Håkansson AB</span>
              <span>Ernst Ahlgrens väg 10</span>
              <span>11255 Stockholm, Sweden</span>
          </p>
      </div>
  </div>
  );
}
