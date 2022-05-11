import Layout from '../../common/layout/Layout';
import BackButton from '../../common/components/BackButton';
import Logo from '../../common/components/Logo';
import PortfolioItem from '../../common/components/PortfolioItem';
import styles from '../../styles/Portfolio.module.scss'
import { portfolioItems } from '../../common/portfolio-items';

export default function Portfolio() {
  const items = portfolioItems.filter(item => !item.hidden);

  return (
   <Layout>
     <div className={styles.portfolioIndex}>
      <div className={styles.utilRow}>
          <BackButton></BackButton>
      </div>

      <div className={styles.header}>
        <h1>Portfolio</h1>
        <p>
          This is a collection of personal and professional projects that I've worked on.
        </p>
      </div>
      
      <div className={styles.portfolioItems}>
        {
          items.map(item => (
            <div key={item.uniqueName} className={styles.portfolioIndexItem}>
              <PortfolioItem item={item}></PortfolioItem>
            </div>
          ))
        }
      </div>

      <div className={styles.utilRow}>
          <BackButton></BackButton>
      </div>

      <Logo></Logo>
    </div>
   </Layout>
  )
}
