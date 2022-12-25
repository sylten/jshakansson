import styles from './PortfolioItem.module.scss';
import Link from 'next/link';

export default function PortfolioItem(props) {
  return (
    <div className={`${styles.portfolioItem} ${props.smallView ? styles.smallView : ''}`}>
      <div className={styles.imageWrapper}>
        <Link href={'/portfolio/' + props.item.uniqueName}>
          <img src={props.item.smallMediaUrl} alt="" />
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
                <img src={company.mediaUrl} alt="" />
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
