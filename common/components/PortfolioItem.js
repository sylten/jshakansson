import styles from './PortfolioItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioItem(props) {
  return (
    <div className={`${styles.portfolioItem} ${props.smallView ? styles.smallView : ''}`}>
      <div className={styles.imageWrapper}>
        <Link href={'/portfolio/' + props.item.uniqueName}>
          <Image src={props.item.smallMedia?.url} alt={`${props.item.name} preview image`} width={props.item.smallMedia.width} height={props.item.smallMedia.height} />
        </Link>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}><Link href={'/portfolio/' + props.item.uniqueName}>{props.item.name}</Link></h3>
        <div className={styles.companies}>
          {
            props.item.companies.length === 0 ?
            <span className={styles.company}>
              <img src="/favicon.png" alt="" />
              <span>Personal project</span>
            </span>
            : props.item.companies.map(company => (
              <span key={company.name} className={styles.company}>
                <Image src={company.mediaUrl} alt="" width={company.mediaWidth} height={company.mediaHeight} />
                <span>{company.name}</span>
              </span>
            ))
          }
        </div>
        <span className={styles.intro}>{props.item.intro}</span>
        <span className={styles.tech}>
          { props.item.tech.map(name => <span key={name}>{name}</span>) }
        </span>
      </div>
    </div>

  );
}
