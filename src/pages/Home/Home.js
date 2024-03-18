// Home.js
import React from 'react';
import styles from './Home.module.css';
import TeamMembers from '../../components/TeamMembers/TeamMembers';
import ArticleOverview from '../../components/ArticleOverview/ArticleOverview';
import { Link } from 'react-router-dom'; 
//import catHead from '../../assets/images/wizhat-cat.svg';
const Home = () => {
  return (
    <div>
    <div className={styles.main}>
    <div className={styles.column}>
   &nbsp;
        </div>
      <div className={styles.transparentContainer}>
      <h3>Discover how 8 lines of code can concatenate such spellbinding tech! 🧙‍♂️💻🐾</h3>
      <p>OP_CAT was a powerful function in Bitcoin's scripting language but was removed due to potential issues.</p>
      <p>
      The page has just been updated with <Link to="STACK_GAME">STACK_GAME</Link> & <Link to="/CODE_EXPLAINED">CODE_EXPLAINED</Link> explanation to how the 8 lines of code work. 
       </p>
       </div>
    </div>
    <ArticleOverview />
    
  <div className={styles.mainCat}>
  
  <TeamMembers />

  
    </div>
  </div>
  );
};

export default Home;
