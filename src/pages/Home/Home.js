// WalkingCat.js
import React from 'react';
import styles from './Home.module.css';

const WalkingCat = () => {
  return (
    <div>
    <div className={styles.main}>
    <div className={styles.marco}>
      <div className={styles.cielo}></div>
      <div className={styles.luna}></div>
      <div className={styles.gato}></div>
      <div className={styles.muro}></div>
      <div className={styles.edificios}></div>
      <div className={`${styles.matrixTextContainer} ${styles.overlay}}`}>
        
          {`OP_CAT was a powerful function in Bitcoin's scripting language but was removed due to potential issues. Some want to bring it back to enable more complex Bitcoin applications, while others have concerns.

`}
        
      </div>
      <img className={styles.gatoImage} src="/gatito_pushui.svg" alt="Cat" />
    </div></div>
   
    <div className={styles.aboutSection}>
    
    <div className={styles.column}>
       test
    </div>

    
    <div className={styles.column}>

    

    </div>
  </div></div>
  );
};

export default WalkingCat;
