import Head from 'next/head'
import { ReactNode } from 'react';
import Footer from './Footer';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
  isLanding?: boolean;
}

const Layout: React.FC<LayoutProps> = ({children, isLanding}) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>Jonas Siltamäki Håkansson</title>
        <meta name="title" property="title" content="Jonas Siltamäki Håkansson" />
        <meta property="og:title" content="Jonas Siltamäki Håkansson" />
        <meta name="description" property="description" content="My portfolio of personal and professional projects that I've worked on." />
        <meta property="og:description" content="My portfolio of personal and professional projects that I've worked on." />
        <meta property="og:image" content="https://jshakansson.se/assets/jshakansson-150-min.png" />
        <meta property="og:image:url" content="https://jshakansson.se/assets/jshakansson-150-min.png" />
        <meta property="og:image:secure_url" content="https://jshakansson.se/assets/jshakansson-150-min.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Jonas Portfolio logo" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content="Jonas Siltamäki Håkansson" />
        <meta property="og:url" content="https://jshakansson.se" />
        <meta name="google-site-verification" content="RZ_40JsTzlDejUohOlhrK4KzHir-YRa3kAoSdDAyrrI" />
        <link rel="icon" type="image/x-icon" href="favicon.ico?v=7" />
      </Head>
      <div className={styles.Content}>{children}</div>
      <Footer isLanding={isLanding} />
    </div>
  );
}

export default Layout;
