import Link from 'next/link';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div class={styles.logo}>
      <Link href="/landing"><a><img src="/jshakansson-650.png" alt="Jonas portfolio logo" /></a></Link>        
    </div>
  );
}
