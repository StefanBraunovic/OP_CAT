// Home.js
import React from 'react';
import styles from './Home.module.css';
import TeamMembers from '../../components/TeamMembers/TeamMembers';
import ArticleOverview from '../../components/ArticleOverview/ArticleOverview';
import TwitterFeed from '../../components/TwitterFeed/TwitterFeed';
//import catHead from '../../assets/images/wizhat-cat.svg';
const Home = () => {
  return (
    <div>
    <div className={styles.main}>
    <div className={styles.column}>
   &nbsp;
        </div>
      <div className={styles.transparentContainer}>
      <h3>What is OP_CAT?</h3>
      <p>OP_CAT was a powerful function in Bitcoin's scripting language but was removed due to potential issues.</p><p>
       Some want to bring it back to enable more complex Bitcoin applications, while others have concerns.</p>
       <p>This page is created as a part of the Quantumcats quests, and meant to be a site with resources and usecases to understand OP_CAT.</p>
       </div>
    </div>
    <ArticleOverview />
    
  <div className={styles.mainCat}>
  
  <TeamMembers />
  <TwitterFeed />
  
    </div>
  </div>
  );
};

export default Home;
