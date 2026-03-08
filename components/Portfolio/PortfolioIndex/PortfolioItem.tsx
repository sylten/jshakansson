"use client";
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
    <Link
      href={"/portfolio/" + item.uniqueName}
      className={`${styles.card} ${smallView ? styles.smallView : ""}`}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={item.smallMedia?.url}
          alt={`${item.name} preview image`}
          width={item.smallMedia.width}
          height={item.smallMedia.height}
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{item.name}</h3>
        <div className={styles.companies}>
          {item.companies.map(company => (
            <span key={company.name} className={styles.company}>
              <Image
                src={company.mediaUrl}
                alt=""
                width={company.mediaWidth}
                height={company.mediaHeight}
                className={styles.companyLogo}
              />
              <span>{company.name}</span>
            </span>
          ))}
        </div>
        <p className={styles.intro}>{item.intro}</p>
        <div className={styles.tech}>
          {item.tech.map(name => (
            <span key={name} className={styles.tag}>{name}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
