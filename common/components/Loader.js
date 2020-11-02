import styles from './Loader.module.scss';

export function Loader() {
  return (<div className={styles.Loader}></div>);
}

export function CenteredLoader() {
  return (<div className={styles.CenteredLoader}><Loader /></div>);
}
