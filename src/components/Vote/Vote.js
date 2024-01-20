// VoteComponent.js

import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../../config/firestore'

const VoteComponent = () => {
  const [username, setUsername] = useState('');
  const [vote, setVote] = useState([]);
  const [votes, setVotes] = useState(null);
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

  const handleVote = (option) => {
    setVote(option);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const hasUserVoted = () => {
    return votes.some((result) => result.username === username);
  };

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
      alert('That cat has already voted.');
    } else {
      alert('Please vote before submitting.');
    }
  };

  const calculateVoteCounts = () => {
    const voteCounts = {
      Yes: 0,
      No: 0,
    };

    votes?.forEach((result) => {
      console.log(result);
      if(result.vote == "Yes"){
        voteCounts.Yes++;
      }else{
        voteCounts.No++;
      }
    });

    return voteCounts;
  };

  const totalVotes = calculateVoteCounts();

  return (
    <div>
      <h2>Vote Now!</h2>
      {!votingComplete ? (
        <div>
          <div style={{ marginBottom: '10px' }}>
            <img
              src="path/to/your/image.jpg" // Replace with the actual path to your image
              alt="Vote Question"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <p>Are you an OP_CAT enjoyer?</p>
          <label>
            Enter CAT nickname:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <button onClick={() => handleVote('Yes')}>Vote Yes</button>
          <button onClick={() => handleVote('No')}>Vote No</button>
          <br />
          <button onClick={handleVoteSubmission}>Submit Vote</button>
        </div>
      ) : (
        <div>
          <p>Thank you for your vote!</p>
          <p>Your vote: {vote}</p>
          <h3>Vote Results</h3>
          <h3>Total Votes</h3>
          <p>Yes: {totalVotes.Yes}</p>
          <p>No: {totalVotes.No}</p>
        </div>
      )}
    </div>
  );
};

export default VoteComponent;
