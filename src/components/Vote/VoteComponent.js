// VoteComponent.js

import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../../config/firestore'
import styles from './VoteComponent.module.css';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';

const VoteComponent = () => {
  const [username, setUsername] = useState(null);
  const [vote, setVote] = useState(null);
  const [votes, setVotes] = useState([]);
  const [votingComplete, setVotingComplete] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const getVotes = async ()=> {
    const querySnapshot = await getDocs(collection(db, "votes"));
    const votes = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    setVotes(votes);
  };

  useEffect(() => {
    getVotes();
  }, []);

  useEffect(() => {
    generateUsername();
  }, []);

  useEffect(() => {
    if (username){
      localStorage.setItem('username', JSON.stringify(username));
    }
  }, [username]);

  useEffect(() => {
    if(vote){
      handleVoteSubmission();
    }
  }, [vote]);

  const handleVote = async (option) => {
    setVote(option);
  };

  const hasUserVoted = () => {
    return votes.some((result) => result.username === username);
  };

  const generateUsername = () => {
    let userid = JSON.parse(localStorage.getItem('username'));
    if (!userid){
      userid = uuidv4();
      localStorage.setItem('username', JSON.stringify(username));
    }

    setUsername(userid);
    console.log(`Generated username: ${userid}`)
    return userid;
  }

  const handleVoteSubmission = async () => {
    if (!hasVoted && username && vote !== null && !hasUserVoted()) {
      try {

        const newVote = {
            vote,
            username,
            timestamp: new Date()
        };

        votes.push(newVote);

        // Save vote data to Firestore
        const docRef = await addDoc(collection(db, "votes"), {
            ...newVote,
        });

        console.log(`Vote submitted with ID: ${docRef.id}`);

        setVotes(votes);
        setVotingComplete(true);
        setHasVoted(true);
        getVotes();
      } catch (error) {
        console.error('Error submitting vote:', error);
      }
    } else if (hasVoted) {
      alert('You have already voted.');
    } else if (hasUserVoted()) {
      alert('Meow! This cat has already voted.');
    }else{
      alert(`hasVoted:${hasVoted}, vote: ${vote}, username: ${username}`)
    }
  };

  const calculateVoteCounts = () => {
    const voteCounts = {
      Yes: 0,
      No: 0,
    };

    votes.forEach((result) => {
      voteCounts[result.vote]++;
    });

    return voteCounts;
  };

  const calculateVotePercentages = () => {
    const totalVotes = votes.length;
    const voteCounts = calculateVoteCounts();

    const yesVotes = votes.filter((result) => result.vote === 'Yes').length;
    const noVotes = votes.filter((result) => result.vote === 'No').length;

    const percentageYes = totalVotes === 0 ? 0 : (yesVotes / totalVotes) * 100;
    const percentageNo = totalVotes === 0 ? 0 : (noVotes / totalVotes) * 100;

    return { percentageYes, percentageNo, voteCounts };
  };

  const { percentageYes, percentageNo, voteCounts } = calculateVotePercentages();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <h2>Make your MEOW count and Vote now!</h2>
      {!votingComplete ? (
        <div>
          <div className={styles["centered-container"]}>
            <div className={styles["image-container"]}>
              <img
                src={process.env.PUBLIC_URL + '/cat0023.png'} // Replace with the actual path to your image
                alt="Vote Question"
                style={{ width: '200px', height: '200px' }}
              />
            </div>
          </div>
          <h3 className={styles.center}>Are you an OP_CAT enjoyeer?</h3>

          <Stack spacing={2} direction="row" justifyContent={'space-evenly'}>
            <Button size='small' variant='contained' onClick={() => handleVote('Yes')}>Yes</Button>
            <Button size='small' variant='contained' onClick={() => handleVote('No')}>No</Button>
          </Stack>
        </div>
      ) : (
        <div>
          <p>Thank you for your vote!</p>
          <p>Your vote: <b>{vote}</b></p>          
        </div>
      )}
      <div>
          <h3>Vote Results</h3>
          <div>
            <Stack direction="row" spacing={2} justifyContent={'center'}>
              <Item><div className={styles.container}>
                  <div className={styles["green-box"]}/> 
                  <span className={styles.label}>Yes: {voteCounts.Yes}</span>
                </div></Item>
              <Item><div className={styles.container}>
                <div className={styles["red-box"]}/> 
                <span className={styles.label}>No: {voteCounts.No}</span>
              </div></Item>
            </Stack>
          </div>
          <div className={styles["percentage-bar"]}>
            <div className={styles["percentage-yes"]} style={{ width: `${percentageYes}%` }}>
              {percentageYes.toFixed(2)}%
            </div>
            <div className={styles["percentage-no"]} style={{ width: `${percentageNo}%` }}>
              {percentageNo.toFixed(2)}%
            </div>
          </div>
      </div>      
    </div>
  );
};

export default VoteComponent;
