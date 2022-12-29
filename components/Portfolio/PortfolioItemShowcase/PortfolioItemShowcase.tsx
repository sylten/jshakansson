import styles from "./PortfolioItemShowcase.module.scss";
import { PortfolioItem, MediaType } from "../portfolioItems";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronLeft } from "react-icons/fi";
import IconAligner from "../../common/IconAligner";

interface PortfolioItemShowcaseProps {
  item: PortfolioItem;
}

const PortfolioItemShowcase: React.FC<PortfolioItemShowcaseProps> = ({ item }) => {
  const [isHoveringVisitButton, setIsHoveringVisitButton] = useState(false);
  const descriptionParagraphs = item.description.split("<br>");

  const mouseEnterVisitButton = () => {
    setIsHoveringVisitButton(true);
  };

  const mouseLeaveVisitButton = () => {
    setIsHoveringVisitButton(false);
  };

  return (
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
              <iframe src={"https://www.youtube.com/embed/" + item.largeMedia.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
        }

        {
          item.largeMedia.type === MediaType.Vimeo &&
            <div className={styles.embeddedVideoWrapper}>
              <iframe src={"https://player.vimeo.com/video/" + item.largeMedia.url} allowFullScreen></iframe>
            </div>
        }

        {
          item.largeMedia.type === MediaType.GoogleDrive &&
            <div className={styles.embeddedVideoWrapper}>
              <iframe src={"https://drive.google.com/file/d/" + item.largeMedia.url + "/preview"} allowFullScreen></iframe>
            </div>
        }

        <div className={styles.back}>
          <Link href="/portfolio">
            <IconAligner><FiChevronLeft size={"1.25rem"} /> Back to portfolio</IconAligner>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemShowcase;
