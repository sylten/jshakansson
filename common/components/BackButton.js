import styles from './BackButton.module.scss';
import Link from 'next/link';

export default function BackButton() {
  return (
    <Link href="/">
      <a className={styles.BackButton + ' no-print'}>
          <i className="fal fa-chevron-left"></i> Back
      </a>
    </Link>
  );
}
