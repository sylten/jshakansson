import Layout from '../../common/layout/Layout';
import styles from '../../styles/Item.module.scss'
import { portfolioItems } from '../../common/portfolio-items';
import { MediaType } from '../../common/media-type';
import { useRouter } from 'next/router'
import {useState, useEffect} from 'react';
import Link from 'next/link';

export default function Item() {
  const router = useRouter();
  const { itemName } = router.query;

  const [isHoveringVisitButton, setIsHoveringVisitButton] = useState(false)
  const [item, setItem] = useState(null)
  const [descriptionParagraphs, setDescriptionParagraphs] = useState([])

  useEffect(() => {
    (async() => {
      if (!itemName) {
        return;
      }

      const item = portfolioItems.find(item => item.uniqueName === itemName);
      const descriptionParagraphs = item.description.split('<br>');
      console.log(item)

      setItem(item);
      setDescriptionParagraphs(descriptionParagraphs);
    })();
  }, [router]);

  const mouseEnterVisitButton = (event) => {
    setIsHoveringVisitButton(true);
  }

  const mouseLeaveVisitButton = (event) => {
    setIsHoveringVisitButton(false);
  }

  if (!item) {
    return <div></div>;
  }

  return (
   <Layout>
     <div className={styles.portfolioItem}>
        <div className={styles.body}>
            <div className={styles.header}>
                { item.itemLogo ? <img src={item.itemLogo} alt={item.name} /> : '' }
                { item.showNameNextToLogo ? <h1 className={styles.title}>{item.name}</h1> : '' }
            </div>
            

            <div className={styles.subheader}>
                <div className={styles.companies}>
                  {
                    item.companies.length === 0 ?
                    <span className={styles.company}>
                      <img src="/assets/favicon.png" alt="" />
                      <span>Personal project</span>
                    </span>
                    : item.companies.map(company => (
                      <span key={company.name} className={styles.company}>
                        <img src={company.mediaUrl} alt="" />
                        <span>{company.name}</span>
                      </span>
                    ))
                  }
                </div>

                <span className={styles.tech}>
                  { item.tech.map(name => <span key={name}>{name}</span>) }
                </span>
            </div>
            
            { descriptionParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>) }

            { 
              item.url ?
              <div className={styles.visitProject}>
                  <div className={styles.line}>
                      <div classname={`${styles.hoverLine} ${styles.hoverLineLeft} ${isHoveringVisitButton ? styles.hover : ''}`}></div>
                  </div>

                  <div className={styles.buttonWrapper}>
                      <a href={item.url} target="_blank" onMouseenter={mouseEnterVisitButton} onMouseleave={mouseLeaveVisitButton}>{item.urlButtonText || 'View project'}</a>
                  </div>
          
                  <div className={styles.line}>
                      <div className={`${styles.hoverLine} ${styles.hoverLineRight} ${isHoveringVisitButton ? styles.hover : ''}`}></div>
                  </div>
              </div>
              : ''
            }

            {
              item.largeMediaType === MediaType.Image
              ? <div className={styles.banner}>
                  <img src={item.largeMediaUrl} alt="" />
                </div>
              : ''
            }

            {
              item.largeMediaType === MediaType.YouTube
              ? <div className={styles.embeddedVideoWrapper}>
                    <iframe src={'https://www.youtube.com/embed/' + item.largeMediaUrl} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
              : ''
            }

            {
              item.largeMediaType === MediaType.Vimeo
              ? <div className={styles.embeddedVideoWrapper}>
                    <iframe src={'https://player.vimeo.com/video/' + item.largeMediaUrl} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
              : ''
            }

            {
              item.largeMediaType === MediaType.GoogleDrive
              ? <div className={styles.embeddedVideoWrapper}>
                    <iframe src={'https://drive.google.com/file/d/' + item.largeMediaUrl + '/preview'} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
              : ''
            }

            <div className={styles.back}>
              <Link href="/portfolio">
                <a><i className="fal fa-chevron-left"></i> Back to portfolio</a>
              </Link>
            </div>
        </div>
    </div>
   </Layout>
  )
}
