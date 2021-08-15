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
                    <p className={styles.title}>Software Engineering consultant</p>
                    <p>
                      I am an entrepreneurial software engineer who loves data and finance. 
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
                        <p className={styles.tech}>.Net, Angular, SQL Server, C#, TypeScript, Azure DevOps, Service Fabric</p>
                        <p className={styles.summary}>System design and development using .Net, Angular and Azure DevOps. Including design and implementation of a micro frontend architecture based on module federation.</p>
                    </div>

                    <div className={styles.item}>
                        <h3>SEB</h3>
                        <p className={styles.title}>Solutions Developer / Designer</p>
                        <p className={styles.period}>2018-2019</p>
                        <p className={styles.tech}>.Net, Angular, SQL Server, C#, TypeScript, Azure DevOps, IBM MQ, IBM Api Connect</p>
                        <p className={styles.summary}>Full stack software development. Worked in a project to modernise the architecture of the systems handling settlement of securities, while also making SEB compliant in CSDR. The application I worked on provides a Rest API for securities settlement, also developed an MQ based solution to provide the same functionality for older systems.</p>
                    </div>

                    <div className={styles.item}>
                        <h3>Tattoomigo</h3>
                        <p className={styles.title}>Co-Founder, developer</p>
                        <p className={styles.period}>2017-2018</p>
                        <p className={styles.tech}>.Net Core, Angular, SQL Server, C#, TypeScript, Azure, Node JS, Swish API</p>
                        <p className={styles.summary}>As a co-founder I worked on everything from developing the initial idea into a sustainable business model to developing the platform. I worked closely with a very entrepreneurial person and my role was often to take ideas and bring them down to earth. We completed each other very well and I enjoyed developing the business model and logistics.
                          <br/><br/>
                          I also helped develop the system architecture and website. I mainly worked on the frontend. The backend is written in C# using .Net Core and SQL Server and is hosted in Azure. The frontend is written in TypeScript and uses Angular 5 along with Angular Universal and is hosted on a lightweight Node JS server.
                          <br/><br/>
                          Additionally I acted supervisor for engineering students doing their examination work at Tattoomigo.
                        </p>
                    </div>

                    <div className={styles.item}>
                        <h3>Signe.io</h3>
                        <p className={styles.title}>Co-Founder, developer</p>
                        <p className={styles.period}>2016-2017</p>
                        <p className={styles.tech}>React, Bootstrap, Node JS, MySQL, Stripe API</p>
                        <p className={styles.summary}>I helped kick start Signe, working out the business model and branding while also building the first prototype version of Signe using NodeJS and MySQL for backend and React on the frontend.</p>
                    </div>

                    <div className={styles.item}>
                        <h3>Skandikon</h3>
                        <p className={styles.title}>Software Engineer</p>
                        <p className={styles.period}>2014-2015</p>
                        <p className={styles.tech}>.Net, SQL Server, jQuery, C#, JavaScript</p>
                        <p className={styles.summary}>System development, full stack development of a system for handling pensions. Programming in C# using .NET MVC, SQL Server and front end work in ASP / jQuery.</p>
                    </div>

                    <div className={styles.item}>
                        <h3>Plan 8 Production</h3>
                        <p className={styles.title}>Web Developer</p>
                        <p className={styles.period}>2013-2014</p>
                        <p className={styles.tech}>JavaScript, jQuery, Backbone, RequireJS, Node JS, MySQL, PHP</p>
                        <p className={styles.summary}>Continued to develop my <Link href="/portfolio/klang" target="_blank"><a>school examination project Klang</a></Link>, which was used in collaboration with clients such as Google, H&amp;M, Mercedes, HBO and many more. Also included full stack development of a cloud based system for handling audio files and adding music and sound to interactive websites built in JavaScript, PHP and MySQL. As well as web apps using Node JS.</p>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.education}`}>
                    <h2>Education</h2>
                    <div className={styles.item}>
                        <h3>Udacity</h3>
                        <p className={styles.degree}>Data Scientist Nanodegree</p>
                        <p className={styles.period}>2021</p>
                    </div>
                    
                    <div className={styles.item}>
                        <h3>Stockholm University</h3>
                        <p className={styles.degree}>Bachelor’s Degree, Business Administration and Management</p>
                        <p className={styles.period}>2015-2018</p>
                    </div>

                    <div className={styles.item}>
                        <h3>The Chinese University of Hong Kong Business School</h3>
                        <p className={styles.degree}>Exchange term, Managerial Economics</p>
                        <p className={styles.period}>2017</p>
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
                        <h3>Leading Yourself and Others</h3>
                        <p><a className={styles.issuer} href="https://enneagramcenter.se/" target="blank">EnneagramCenter</a></p>
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
