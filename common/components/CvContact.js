import styles from './CvContact.module.scss';

export default function CvContact() {
  return (
    <div className={styles.cvContact}>
      <div className={styles.profilePicture}>
          <img src="/jonas-min.jpg" alt="Jonas Siltamäki Håkansson" />
      </div>
      <div className={styles.contact}>
          <h4>Contact</h4>

          <a className={styles.pdf + ' no-print'} href="/jonas-siltamaki-hakansson-cv.pdf" target="blank">
              <i className="fal fa-file-pdf"></i> Pdf
          </a>

          <p className={styles.website}>
              <a href="https://jshakansson.se/" target="blank">
                  <i className="fal fa-globe"></i> jshakansson.se
              </a>
          </p>

          <p className="no-print">
              <a href="https://www.linkedin.com/in/jonas-siltamaki-hakansson" target="blank">
                  <i className="fab fa-linkedin"></i> LinkedIn
              </a>
          </p>

          <p>
              <a href="https://github.com/sylten" target="blank">
                  <i className="fab fa-github"></i> GitHub - sylten
              </a>
          </p>

          <p>
              <a href="mailto:jonas@jshakansson.se" target="blank">
                  <i className="fal fa-envelope"></i> jonas@jshakansson.se
              </a>
          </p>

          <p className={styles.phone}>
              <i className="fal fa-phone"></i> +46703078303
          </p>

          <p className={styles.address}>
              <span>J.S. Håkansson, AB</span>
              <span>Ernst Ahlgrens väg 10</span>
              <span>11255 Stockholm, Sweden</span>
          </p>
      </div>
  </div>
  );
}
