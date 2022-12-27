import Link from 'next/link';
import styles from './Logo.module.scss';
import Image from 'next/image';
import jshakanssonMin from "../../public/jshakansson-650-min.png";

export default function Logo({priority}) {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Image src={jshakanssonMin} alt="J.S. Håkansson AB Logo" width={650} height={650} priority={priority} />
      </Link>        
    </div>
  );
}
