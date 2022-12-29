import Layout from "../common/layout/Layout";
import CvContact from "../common/components/CvContact";
import BackButton from "../common/components/BackButton";
import Logo from "../common/components/Logo";
import styles from "../styles/Cv.module.scss";
import Link from "next/link";

export default function Cv() {
  return (
    <Layout>
      <div className={styles.cv}>
        <div className={styles.utilRow + " no-print"}>
          <BackButton></BackButton>
        </div>

        <div className={styles.content}>
          <div className={styles.main}>
            <div className={styles.header}>
              <h1>Jonas Siltamäki Håkansson</h1>
              <p className={styles.title}>Software engineering consultant</p>
              <p>
                I am an entrepreneurial self-employed software engineer with
                experience of multiple industries, from music and marketing to
                banking and finance. My interest in web development started as
                an 11-year old, when I created a website for a game I played.
                Since then I&lsquo;ve obtained degrees in computer science and business
                administration, and have gained extensive knowledge working with
                software development and software architecture. I also still like to
                spend time on hobby programming projects. I&lsquo;ve had a lot of fun with Raspberry Pis.
              </p>
              <p>
                In addition to web development, finance and business are deep-rooted interests.
                I consume a lot of information on economics and financial news, and I&lsquo;ve
                enjoyed co-founding two startups. I also enjoy reading, running and cooking.
              </p>
              <div className={styles.contactHeader}>
                <CvContact></CvContact>
              </div>
            </div>
            <div className={`${styles.section} ${styles.experience}`}>
              <h2>Experience</h2>
              <div className={styles.item}>
                <h3>Elgiganten</h3>
                <p className={styles.title}>Full Stack Developer</p>
                <p className={styles.period}>2022-</p>
                <p className={styles.skills}>React, Next.js, Node, TypeScript, .Net Core, C#, Cosmos DB, Kafka, Tailwind CSS, CI/CD, DevOps</p>
                <ul>
                  <li>Mainly worked on an app for customers to track their orders and packages, after making a purchase in the e-commerce store. The app is available in four countries.</li>
                  <li>Included some coaching of junior developers.</li>
                </ul>
              </div>

              <div className={styles.item}>
                <h3>Insclear</h3>
                <p className={styles.title}>Full Stack Developer</p>
                <p className={styles.period}>2019-2022</p>
                <p className={styles.skills}>Angular, .Net, Service Fabric, Azure DevOps, SQL, CI/CD, DevOps</p>
                <ul>
                  <li>Various projects to streamline administration processes and interfaces, to minimize errors and make administration more efficient. I worked on requirements engineering, architecture, design of interfaces and web development.</li>
                  <li>Migration of a monolithic frontend application to a micro frontend based architecture using module federation. I helped with initial research and requirements analysis, architecture, web development and documentation.</li>
                </ul>
              </div>

              <div className={styles.item}>
                <h3>SEB</h3>
                <p className={styles.title}>Solutions Developer / Designer</p>
                <p className={styles.period}>2018-2019</p>
                <p className={styles.skills}>Angular, .Net, SQL, Azure DevOps, Software architecture, IBM Api Connect</p>
                <ul>
                  <li>Solution design and engineering. I worked on a project to modernise the architecture of the systems handling settlement of securities, while also making SEB compliant in CSDR. The main deliveries of the project was an API for securities settlement and a web based GUI for administration of securities settlement.</li>
                </ul>
              </div>

              <div className={styles.item}>
                <h3>Tattoomigo</h3>
                <p className={styles.title}>Co-Founder &amp; Developer</p>
                <p className={styles.period}>2017-2018</p>
                <p className={styles.skills}>React, Node, TypeScript, .Net Core, SQL, Azure</p>
                <ul>
                  <li>Web development including architecture, programming, UX and design.</li>
                  <li>Supervision of two engineering students doing their examination work at Tattoomigo.</li>
                  <li>I also helped with development of the initial idea into a sustainable business model. I also helped with branding. I worked closely with a very entrepreneurial colleague and my role was often to take ideas and bring them down to earth.</li>
                </ul>
              </div>

              <div className={styles.item}>
                <h3>Signe.io</h3>
                <p className={styles.title}>Co-Founder &amp; Developer</p>
                <p className={styles.period}>2016-2017</p>
                <p className={styles.skills}>React, Node, JavaScript, SQL, Stripe</p>
                <ul>
                  <li>Development of a prototype version of the platform using Node, MySQL, React and Stripe as a payment service provider.</li>
                  <li>Development of the business model, logistics and branding.</li>
                </ul>
              </div>

              <div className={styles.item}>
                <h3>Skandikon</h3>
                <p className={styles.title}>Full Stack Developer</p>
                <p className={styles.period}>2014-2015</p>
                <p className={styles.skills}>.Net, C#, SQL, JavaScript</p>
                <ul>
                  <li>Systems development, full stack development of a system for handling pensions.</li>
                </ul>
              </div>

              <div className={styles.item}>
                <h3>Plan 8 Production</h3>
                <p className={styles.title}>Web Developer</p>
                <p className={styles.period}>2013-2014</p>
                <p className={styles.skills}>JavaScript, TypeScript, Node, SQL, PHP, AWS</p>
                <ul>
                  <li>Continuation of development of my <Link href="/portfolio/klang" target="_blank">school examination project Klang</Link>, which was used in collaboration with clients such as Google, H&amp;M, Mercedes, HBO and many more. I wrote it in TypeScript when it had just been released still had no major version, needless to say I was amazed at being able to write typed JavaScript :&#41;</li>
                  <li>Full stack development of a cloud based system for handling audio files and adding music and sound to interactive websites.</li>
                  <li>Various interactive web apps.</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.section} ${styles.education}`}>
              <h2>Education</h2>
              <div className={styles.item}>
                <h3>KTH Royal Institute of skillsnology</h3>
                <p className={styles.degree}>Bachelor&lsquo;s Degree, Computer Science</p>
                <p className={styles.period}>2010-2013</p>
              </div>

              <div className={styles.item}>
                <h3>The Chinese University of Hong Kong Business School</h3>
                <p className={styles.degree}>Exchange term, Managerial Economics</p>
                <p className={styles.period}>2017</p>
              </div>

              <div className={styles.item}>
                <h3>Stockholm University</h3>
                <p className={styles.degree}>Bachelor&lsquo;s Degree, Business Administration and Management</p>
                <p className={styles.period}>2015-2018</p>
              </div>
            </div>

            <div className={`${styles.section} ${styles.experience}`}>
              <h2>Other projects</h2>
              <div className={styles.item}>
                <h3>MiBreaker <Link href="https://mibreaker.com/sv">(mibreaker.com)</Link></h3>
                <p className={styles.period}>2020</p>
                <p className={styles.skills}>React, Node, Next.js, Vercel, Electron, Stripe, Mailjet, Bunny CDN</p>
                <ul>
                  <li>A basic e-commerce website to market and sell the app. Developed in Next.js with React and deployed on Vercel with bunny CDN for serving static files, Stripe for card payments and Mailjet for sending emails.</li>
                  <li>The desktop app is built on Electron with React, packaged and code signed for Windows and Mac.</li>
                </ul>
              </div>
              <div className={styles.item}>
                <h3>Personal website <Link href="https://jshakansson.se">(jshakansson.se)</Link></h3>
                <p className={styles.period}>2019</p>
                <p className={styles.skills}>React, Next.js, Vercel</p>
                <ul>
                  <li>When I started my one man consulting firm, I created a pretty basic website to showcase what I&lsquo;ve done.</li>
                  <li>It&lsquo;s built on Next.js and is hosted on Vercel.</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.section} ${styles.certifications}`}>
              <h2>Certifications</h2>
              <div className={styles.item}>
                <h3>Agile Fundamentals: Including Scrum and Kanban</h3>
                <p><a className={styles.issuer} href="https://www.ude.my/UC-397a8aa7-b7ce-4851-8bde-0716f342ce49/" target="blank">Udemy</a></p>
                <p className={styles.period}>2021</p>
              </div>

              <div className={styles.item}>
                <h3>Data Scientist Nanodegree</h3>
                <p><a className={styles.issuer} href="https://www.udacity.com/" target="blank">Udacity</a></p>
                <p className={styles.period}>2021</p>
              </div>

              <div className={styles.item}>
                <h3>Leading Yourself and Others</h3>
                <p><a className={styles.issuer} href="https://enneagramcenter.se/" target="blank">EnneagramCenter</a></p>
                <p className={styles.period}>2016</p>
              </div>
            </div>

            <div className={`${styles.section} ${styles.languages}`}>
              <h2>Languages</h2>
              <div className={styles.item}>
                <h3>Swedish</h3>
                <p className={styles.level}>Native</p>
              </div>

              <div className={styles.item}>
                <h3>English</h3>
                <p className={styles.level}>Full professional proficiency</p>
              </div>
            </div>
          </div>
          <div className={styles.contactSide}>
            <CvContact></CvContact>
          </div>
        </div>

        <div className={styles.utilRow + " no-print"}>
          <BackButton></BackButton>
        </div>
      </div>

      <div className="no-print">
        <Logo></Logo>
      </div>
    </Layout>
  );
}
