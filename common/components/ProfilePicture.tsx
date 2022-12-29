import styles from './ProfilePicture.module.scss';
import jonasMin from "../../public/jonas-min.jpg";
import Image from 'next/image';

export default function ProfilePicture() {
  return (
    <div className={styles.profilePicture}>
      <Image src={jonasMin} alt="Profile picture of Jonas Siltamäki Håkansson" width={636} height={636} priority />
    </div>
  );
}
