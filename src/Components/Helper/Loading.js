import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <div className={styles.outer}></div>
        <div className={styles.middle}></div>
        <div className={styles.inner}></div>
      </div>
    </div>
  );
};

export default Loading;
