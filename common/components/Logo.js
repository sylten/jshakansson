import Link from 'next/link';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/"><img src="/jshakansson-650-min.png" alt="Jonas portfolio logo" /></Link>        
    </div>
  );
}
