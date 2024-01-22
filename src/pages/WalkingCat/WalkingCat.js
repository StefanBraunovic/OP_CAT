// WalkingCat.js
import React from 'react';
import styles from './WalkingCat.module.css';
import TeamMembers from '../../components/TeamMembers/TeamMembers';
const WalkingCat = () => {
  return (
    <div className={styles.main}>
    <div className={styles.marco}>
      <div className={styles.cielo}></div>
      <div className={styles.luna}></div>
      <div className={styles.gato}></div>
      <div className={styles.muro}></div>
      <div className={styles.edificios}></div>
      
      <img className={styles.gatoImage} src="/gatito_pushui.svg" alt="Cat" />
    </div>
    <TeamMembers />
    </div>
  );
};

export default WalkingCat;
