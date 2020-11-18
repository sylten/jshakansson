import Link from 'next/link';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div class={styles.logo}>
      <Link href="/"><a><img src="/jshakansson-650-min.png" alt="Jonas portfolio logo" /></a></Link>        
    </div>
  );
}
