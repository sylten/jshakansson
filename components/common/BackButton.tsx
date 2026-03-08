import styles from "./BackButton.module.scss";
import Link from "next/link";

interface BackButtonProps {
  href?: string;
}

export default function BackButton({ href = "/" }: BackButtonProps) {
  return (
    <Link href={href} className={styles.BackButton + " no-print"}>
      Back
    </Link>
  );
}
