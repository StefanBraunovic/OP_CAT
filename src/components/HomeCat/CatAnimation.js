// CatComponent.js
import React from 'react';
import styles from './CatAnimation.module.css'; // Import the CSS module

const CatComponent = () => {
  return (
    <div className={styles.catContainer}>
      <div className={`${styles.catHead} ${styles.catColor}`}>
        <div className={`${styles.catLeftEye} ${styles.catEye}`}>
          <div className={`${styles.leftEyelid} ${styles.eyelid} ${styles.catColor}`}></div>
          <div className={styles.pupil}></div>
        </div>
        <div className={`${styles.catRightEye} ${styles.catEye}`}>
          <div className={`${styles.rightEyelid} ${styles.eyelid} ${styles.catColor}`}></div>
          <div className={styles.pupil}></div>
        </div>
      </div>
      <div className={`${styles.catLeftEar} ${styles.catEar} ${styles.catColor}`}>
        <div className={styles.catLeftInsideEar}></div>
      </div>
      <div className={`${styles.catRightEar} ${styles.catEar} ${styles.catColor}`}>
        <div className={styles.catRightInsideEar}></div>
      </div>
      <div className={styles.catHair}></div>
      <div className={`${styles.catBody} ${styles.catColor}`}>
        <div className={`${styles.catFoot} ${styles.leftFoot} ${styles.catColor}`}></div>
        <div className={`${styles.catFoot} ${styles.rightFoot} ${styles.catColor}`}></div>
      </div>
      <div className={styles.catTail}>
        {Array.from({ length: 16 }, (_, index) => (
          <span key={index} className={styles.catColor}></span>
        ))}
      </div>
    </div>
  );
};

export default CatComponent;
