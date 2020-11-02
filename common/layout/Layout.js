import Head from 'next/head'
import Footer from './Footer';
import styles from './Layout.module.scss';

export default function Layout({children}) {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>Jonas Siltamäki Håkansson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Content}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

