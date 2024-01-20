// OPCAT.js
import React from 'react';
import styles from './OPCAT.module.css';
import OpCatComponent from '../../components/OPCAT/OpCatComponent';

const OPCAT = () => {
  return (
    <div className={styles.container}>
      <OpCatComponent />
    </div>
  );
};

export default OPCAT;
