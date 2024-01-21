// OP.js
import React from 'react';
import styles from './OP.module.css';
import Catsvg from './Catsvg';
import Catsvg2 from './Catsvg2';
import Catsvg3 from './Catsvg3';

const OP = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.opH1}>What is OP_CAT?</h1>
      <div className={styles.twoByTwoGrid}>
      <div className={styles.gridRow}>
      <div className={styles.gridItem}>Succcess Flow</div>
      <div className={styles.gridItem}>
      <Catsvg />

      </div>
    </div>
    <div className={styles.gridRow}>
      <div className={styles.gridItem}>
      <Catsvg2 />
      </div>
      <div className={styles.gridItem}>Fail Flow 1</div>
    </div>
    <div className={styles.gridRow}>
      <div className={styles.gridItem}>Fail Flow 2</div>
      <div className={styles.gridItem}>
      <Catsvg3 />
      </div>
    </div>
  </div>
  </div>
  );
};

export default OP;
