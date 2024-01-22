// OPCAT.js
import React from 'react';
import styles from './OPCAT.module.css';
import OpCatComponent from '../../components/OPCAT/OpCatComponent';

const OPCAT = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>OP_CAT In Action</h2>
      <OpCatComponent />
    </div>
  );
};

export default OPCAT;
