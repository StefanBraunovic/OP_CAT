import React from 'react';
import styles from './Vote.module.css';
import VoteComponent from '../../components/Vote/VoteComponent';

const Vote = () => {
    return (
        <div className={styles.votecontainer}>
            <VoteComponent/>
        </div>
    )
}

export default Vote;
