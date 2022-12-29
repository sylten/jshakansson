import styles from "./PortfolioItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import { PortfolioItem as PortFolioItemModel } from "../portfolioItems";
import React from "react";

interface PortfolioItemProps {
  readonly item: PortFolioItemModel;
  readonly smallView?: boolean;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, smallView }) => {
  return (
    <div className={`${styles.portfolioItem} ${smallView ? styles.smallView : ""}`}>
      <div className={styles.imageWrapper}>
        <Link href={"/portfolio/" + item.uniqueName}>
          <Image src={item.smallMedia?.url} alt={`${item.name} preview image`} width={item.smallMedia.width} height={item.smallMedia.height} />
        </Link>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}><Link href={"/portfolio/" + item.uniqueName}>{item.name}</Link></h3>
        <div className={styles.companies}>
          {
            item.companies.map(company => (
              <span key={company.name} className={styles.company}>
                <Image src={company.mediaUrl} alt="" width={company.mediaWidth} height={company.mediaHeight} />
                <span>{company.name}</span>
              </span>
            ))
          }
        </div>
        <span className={styles.intro}>{item.intro}</span>
        <span className={styles.tech}>
          { item.tech.map(name => <span key={name}>{name}</span>) }
        </span>
      </div>
    </div>

  );
};

export default PortfolioItem;
