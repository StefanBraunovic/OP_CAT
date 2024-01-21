import React from 'react';
import styles from './TeamMembers.module.css';
import himorasiImage from '../../assets/team/himorasi.png';
import morinduneImage from '../../assets/team/morindune.png';
import dreadfulImage from '../../assets/team/dreadful.png';
import blackglitterImage from '../../assets/team/blackglitter.webp';
import shiftyImage from '../../assets/team/shifty.webp';
import internalImage from '../../assets/team/internal.png';
const TeamMembers = () => {

  const teamMembersData = [
    {
      imageUrl: himorasiImage,
      title: 'himorasi',
      description: 'Animations & content',
    },
    {
      imageUrl: blackglitterImage,
      title: 'blackglitter',
      description: 'Usecase demo & frontend',
    },
    {
      imageUrl: morinduneImage,
      title: 'morindune',
      description: 'Frontend & content',
    },
    {
      imageUrl: shiftyImage,
      title: 'shifty',
      description: 'Frontend',
    },
    {
      imageUrl: dreadfulImage,
      title: 'dreadful-dev',
      description: 'Usecase demo',
    },
    {
      imageUrl: internalImage,
      title: 'internalError',
      description: 'Article',
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
