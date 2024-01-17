// Home.js
import React from 'react';
import styles from './Home.module.css';
import CatAnimation from '../../components/HomeCat/CatAnimation';

const Home = () => {
  return (
    <div className={styles.container}>
      <CatAnimation />
    </div>
  );
};

export default Home;
