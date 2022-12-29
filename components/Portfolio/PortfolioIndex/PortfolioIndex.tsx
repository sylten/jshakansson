import BackButton from "../../common/BackButton";
import PortfolioItem from "./PortfolioItem";
import styles from "./PortfolioIndex.module.scss";
import { portfolioItems } from "../portfolioItems";

export default function PortfolioIndex() {
  return (
    <div className={styles.portfolioIndex}>
      <div className={styles.utilRow}>
        <BackButton></BackButton>
      </div>

      <div className={styles.header}>
        <h1>Portfolio</h1>
        <p>
        This is a collection of personal and professional projects that I&lsquo;ve worked on.
        </p>
      </div>

      <div className={styles.portfolioItems}>
        {
          portfolioItems.map(item => (
            <div key={item.uniqueName} className={styles.portfolioIndexItem}>
              <PortfolioItem item={item}></PortfolioItem>
            </div>
          ))
        }
      </div>

      <div className={styles.utilRow}>
        <BackButton></BackButton>
      </div>
    </div>
  );
}
