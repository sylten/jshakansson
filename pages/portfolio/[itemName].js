import Layout from "../../common/layout/Layout";
import styles from "../../styles/Item.module.scss";
import { portfolioItems } from "../../common/portfolio-items";
import { MediaType } from "../../common/media-type";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Item() {
  const router = useRouter();
  const { itemName } = router.query;

  const [isHoveringVisitButton, setIsHoveringVisitButton] = useState(false);
  const [item, setItem] = useState(null);
  const [descriptionParagraphs, setDescriptionParagraphs] = useState([]);

  useEffect(() => {
    if (!itemName) {
      return;
    }

    const item = portfolioItems.find(item => item.uniqueName === itemName);
    const descriptionParagraphs = item.description.split("<br>");

    setItem(item);
    setDescriptionParagraphs(descriptionParagraphs);
  }, [router, itemName]);

  const mouseEnterVisitButton = event => {
    setIsHoveringVisitButton(true);
  };

  const mouseLeaveVisitButton = event => {
    setIsHoveringVisitButton(false);
  };

  if (!item) {
    return <div></div>;
  }

  return (
    <Layout>
      <div className={styles.portfolioItem}>
        <div className={styles.body}>
          <div className={styles.header}>
            { item.itemLogo && <Image src={item.itemLogo.url} alt={item.name} width={item.itemLogo.width} height={item.itemLogo.height} /> }
            { item.showNameNextToLogo ?? <h1 className={styles.title}>{item.name}</h1> }
          </div>


          <div className={styles.subheader}>
            <div className={styles.companies}>
              {
                item.companies.map(company => (
                  <span key={company.name} className={styles.company}>
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
            item.url &&
              <div className={styles.visitProject}>
                <div className={styles.line}>
                  <div className={`${styles.hoverLine} ${styles.hoverLineLeft} ${isHoveringVisitButton ? styles.hover : ""}`}></div>
                </div>

                <div className={styles.buttonWrapper}>
                  <a href={item.url} target="_blank" onMouseEnter={mouseEnterVisitButton} onMouseLeave={mouseLeaveVisitButton} rel="noreferrer">{item.urlButtonText || "View project"}</a>
                </div>

                <div className={styles.line}>
                  <div className={`${styles.hoverLine} ${styles.hoverLineRight} ${isHoveringVisitButton ? styles.hover : ""}`}></div>
                </div>
              </div>
          }

          {
            item.largeMedia.type === MediaType.Image &&
              <div className={styles.banner}>
                <Image src={item.largeMedia.url} alt="" width={item.largeMedia.width} height={item.largeMedia.height} priority />
              </div>
          }

          {
            item.largeMedia.type === MediaType.YouTube &&
              <div className={styles.embeddedVideoWrapper}>
                <iframe src={"https://www.youtube.com/embed/" + item.largeMedia.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
          }

          {
            item.largeMedia.type === MediaType.Vimeo &&
              <div className={styles.embeddedVideoWrapper}>
                <iframe src={"https://player.vimeo.com/video/" + item.largeMedia.url} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
          }

          {
            item.largeMedia.type === MediaType.GoogleDrive &&
              <div className={styles.embeddedVideoWrapper}>
                <iframe src={"https://drive.google.com/file/d/" + item.largeMedia.url + "/preview"} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
          }

          <div className={styles.back}>
            <Link href="/portfolio">
              <i className="fal fa-chevron-left"></i> Back to portfolio
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
