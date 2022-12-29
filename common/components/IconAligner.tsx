import React, { ReactNode } from 'react';
import styles from './IconAligner.module.scss';

interface IconAlignerProps {
  readonly children: ReactNode;
}

const IconAligner: React.FC<IconAlignerProps> = ({children}) => {
  return (
    <span className={styles.IconAligner}>
      {children}
    </span>
  );
}

export default IconAligner;
