import styles from './ProfilePicture.module.scss';

export default function ProfilePicture() {
  return (
    <div className={styles.profilePicture}>
      <img src="/jonas-min.jpg" alt="Jonas Siltamäki Håkansson" />
    </div>
  );
}
