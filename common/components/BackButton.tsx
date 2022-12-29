import styles from './BackButton.module.scss';
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import IconAligner from './IconAligner';

export default function BackButton() {
  return (
    <Link href="/" className={styles.BackButton + ' no-print'}>
      <IconAligner>
        <FiChevronLeft size={"1.25rem"} /> Back
      </IconAligner>
    </Link>
  );
}
