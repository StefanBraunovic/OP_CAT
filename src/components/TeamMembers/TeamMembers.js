import React from 'react';
import styles from './TeamMembers.module.css';

const TeamMembers = () => {
  // Sample data for images and text
  const teamMembersData = [
    {
      imageUrl: 'image1.jpg',
      title: 'Member 1',
      description: 'Description for Member 1',
    },
    {
      imageUrl: 'image2.jpg',
      title: 'Member 2',
      description: 'Description for Member 2',
    },
    {
      imageUrl: 'image3.jpg',
      title: 'Member 3',
      description: 'Description for Member 3',
    },
    {
      imageUrl: 'image4.jpg',
      title: 'Member 4',
      description: 'Description for Member 4',
    },
    {
      imageUrl: 'image5.jpg',
      title: 'Member 5',
      description: 'Description for Member 5',
    },
  ];

  return (
    <div className={styles.teamMembersContainer}>
      {teamMembersData.map((item, index) => (
        <div key={index} className={styles.teamMemberItem}>
          <img
            src={item.imageUrl}
            alt={item.title}
            className={styles.roundedImage}
          />
          <div className={styles.teamMemberText}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
