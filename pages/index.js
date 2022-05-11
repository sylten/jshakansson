import Layout from '../common/layout/Layout';
import styles from '../styles/Landing.module.scss'
import Link from 'next/link';
import ProfilePicture from '../common/components/ProfilePicture';

export default function Landing() {
  return (
   <Layout isLanding={true}>
     <div className={styles.landing}>
        <div className={styles.header}>
            <div className={styles.title}>
                <div className={styles.profileAbove}><ProfilePicture  /></div>

                <div>
                    <h1>Jonas Siltamäki Håkansson</h1>
                    <p>Software engineering consultant proficient in frontend and backend technologies such as React, Angular, .Net and Node.</p>
                </div>
                
                <div className={styles.profileRight}><ProfilePicture /></div>
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
