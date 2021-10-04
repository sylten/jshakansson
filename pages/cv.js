import Layout from '../common/layout/Layout';
import CvContact from '../common/components/CvContact';
import BackButton from '../common/components/BackButton';
import Logo from '../common/components/Logo';
import styles from '../styles/Cv.module.scss'
import Link from 'next/link';

export default function Cv() {
  return (
   <Layout>
     <div className={styles.cv}>
        <div className={styles.utilRow + ' no-print'}>
            <BackButton></BackButton>
        </div>

        <div id="cv-content" className={styles.content}>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Jonas Siltamäki Håkansson</h1>
                    <p className={styles.title}>Engineering and business consultant</p>
                    <p>
                      I am an entrepreneurial engineer an who loves data and finance. 
                      My curiousness is never-ending and has taken me across multiple industries, 
                      from music and marketing to consulting as a self-employed software engineer. 
                      Finance and business has always been at the core of my interests, and I compulsively
                      analyse macro economics, stocks, businesses and financial news and enjoy it thoroughly.
                    </p>
                    <div className={styles.contactHeader}>
                        <CvContact></CvContact>
                    </div>
                </div>
                <div className={`${styles.section} ${styles.experience}`}>
                    <h2>Experience</h2>
                    <div className={styles.item}>
                        <h3>Insclear</h3>
                        <p className={styles.title}>Frontend lead</p>
                        <p className={styles.period}>2019-</p>
                        <p className={styles.tech}>Angular, SQL, .Net, Requirements analysis and engineering, Systems design and architecture, UX, Azure DevOps</p>
                        <p className={styles.summary}>Various initiatives to streamline administration processes and interfaces, to minimize errors and make the administration more efficient. I worked on requirements engineering, architecture, design of interfaces and actual implementation.</p>
                        <p className={styles.summary}>Migration of a monolithic frontend application to a micro frontend based architecture using module federation. I helped with initial research and requirements analysis, architecture, implementation and documentation.</p>
                    </div>

                    <div className={styles.item}>
                        <h3>SEB</h3>
                        <p className={styles.title}>Solutions Developer / Designer</p>
                        <p className={styles.period}>2018-2019</p>
                        <p className={styles.tech}>Angular, .Net, SQL, Systems design, Azure DevOps, IBM Api Connect</p>
                        <p className={styles.summary}>Systems design and development. I worked on a project to modernise the architecture of the systems handling settlement of securities, while also making SEB compliant in CSDR. The main deliveries of the project was an API for securities settlement and a web based GUI for administration of securities settlement.</p>
                    </div>

                    <div className={styles.item}>
                        <h3>Tattoomigo</h3>
                        <p className={styles.title}>Co-Founder</p>
                        <p className={styles.period}>2017-2018</p>
                        <p className={styles.tech}>Business analysis and development, Angular, SQL, .Net, Azure, Node JS, System architecture, UX, Design</p>
                        <p className={styles.summary}>Development of the initial idea into a sustainable business model. I also helped with branding. I worked closely with a very entrepreneurial colleague and my role was often to take ideas and bring them down to earth.</p>
                        <p className={styles.summary}>Systems development including systems architecture, programming, UX and design.</p>
                        <p className={styles.summary}>Supervision of two engineering students doing their examination work at Tattoomigo.</p>
                    </div>

                    <div className={styles.item}>
                        <h3>Signe.io</h3>
                        <p className={styles.title}>Co-Founder</p>
                        <p className={styles.period}>2016-2017</p>
                        <p className={styles.tech}>React, Node JS, SQL, Stripe, Business analysis, Business development, System architecture, UX</p>
                        <p className={styles.summary}>Development of the business model, logistics and branding.</p>
                        <p className={styles.summary}>Development of a prototype version of the platform using NodeJS, MySQL, React and Stripe as a payment service provider.</p>
                    </div>

                    <div className={styles.item}>
                        <h3>Skandikon</h3>
                        <p className={styles.title}>Software Engineer</p>
                        <p className={styles.period}>2014-2015</p>
                        <p className={styles.tech}>.Net, C#, SQL, JavaScript</p>
                        <p className={styles.summary}>Systems development, full stack development of a system for handling pensions.</p>
                    </div>

                    <div className={styles.item}>
                        <h3>Plan 8 Production</h3>
                        <p className={styles.title}>Web Developer</p>
                        <p className={styles.period}>2013-2014</p>
                        <p className={styles.tech}>JavaScript, Node JS, SQL, PHP, AWS</p>
                        <p className={styles.summary}>Continuation of development of my <Link href="/portfolio/klang" target="_blank"><a>school examination project Klang</a></Link>, which was used in collaboration with clients such as Google, H&amp;M, Mercedes, HBO and many more.</p>
                        <p className={styles.summary}>Full stack development of a cloud based system for handling audio files and adding music and sound to interactive websites built in JavaScript, PHP and MySQL. As well as web apps using Node JS.</p>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.education}`}>
                    <h2>Education</h2>
                    <div className={styles.item}>
                        <h3>The Chinese University of Hong Kong Business School</h3>
                        <p className={styles.degree}>Exchange term, Managerial Economics</p>
                        <p className={styles.period}>2017</p>
                    </div>

                    <div className={styles.item}>
                        <h3>Stockholm University</h3>
                        <p className={styles.degree}>Bachelor’s Degree, Business Administration and Management</p>
                        <p className={styles.period}>2015-2018</p>
                    </div>

                    <div className={styles.item}>
                        <h3>KTH Royal Institute of Technology</h3>
                        <p className={styles.degree}>Bachelor's Degree, Computer Science</p>
                        <p className={styles.period}>2010-2013</p>
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

        <div class={styles.utilRow + ' no-print'}>
          <BackButton></BackButton>
        </div>
    </div>

    <div className="no-print">
        <Logo></Logo>
    </div>
   </Layout>
  )
}
