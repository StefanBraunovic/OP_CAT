// Content.js
import React from 'react';
import styles from './Content.module.css';
//import animation1 from '../../assets/animations/ANIMATION-1_updated.svg';


const Content = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.opH1}>What is OP_CAT?</h1>
      <div className={styles.twoByTwoGrid}>
      <div className={styles.gridRow}>
      <div className={styles.gridItem}>Succcess Flow</div>
      <div className={styles.gridItem}>
      <object
      //    className='animation1' 
      //    data={animation1}
      //    type="image/svg+xml"
      //    aria-label="OP Cat Animation"
        />

      </div>
    </div>
    <div className={styles.gridRow}>
      <div className={styles.gridItem}>
      <object
      //    className='animation1' 
      //    data={animation1}
      //    type="image/svg+xml"
      //    aria-label="OP Cat Animation"
        />
      </div>
      <div className={styles.gridItem}>Fail Flow 1</div>
    </div>
    <div className={styles.gridRow}>
      <div className={styles.gridItem}>Fail Flow 2</div>
      <div className={styles.gridItem}>
      <object
      //    className='animation1' 
      //    data={animation1}
      //    type="image/svg+xml"
      //    aria-label="OP Cat Animation"
        />
      </div>
    </div>
  </div>
  </div>
  );
};

export default Content;
