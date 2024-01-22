import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styles from './TwitterFeed.module.css'

const TwitterFeed = () => {
  return (
    <div className={styles.twitterFeed}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="OperationDedCat" 
        options={{ height: 400 }}
      />
    </div>
  );
};

export default TwitterFeed;