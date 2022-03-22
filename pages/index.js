import Layout from '../common/layout/Layout';
import styles from '../styles/Landing.module.scss'
import Link from 'next/link';

export default function Landing() {
  return (
   <Layout isLanding={true}>
     <div className={styles.landing}>
        <div className={styles.header}>
            <div className={styles.title}>
                <h1>Jonas Siltamäki Håkansson</h1>
                <p>Software engineering consultant</p>
            </div>
        </div>
        
        <div className={styles.navigation}>
            <ul>
                <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                <li><Link href="/cv"><a>CV</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </div>

        <div className={styles.line}></div>
    </div>
   </Layout>
  )
}
