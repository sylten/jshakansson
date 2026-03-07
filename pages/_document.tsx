import { Html, Head, Main, NextScript } from "next/document";

// Minified intentionally — runs inline before React hydrates to prevent theme flash (FOUC)
const themeScript = "(function(){try{var t=localStorage.getItem(\"theme\");if(t&&t!==\"system\")document.documentElement.setAttribute(\"data-theme\",t);}catch(e){}})();";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
