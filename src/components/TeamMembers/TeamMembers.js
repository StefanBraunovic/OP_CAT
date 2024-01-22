import React from 'react';
import styles from './TeamMembers.module.css';
import himorasiImage from '../../assets/team/himorasi.png';
import morinduneImage from '../../assets/team/morindune.png';
import dreadfulImage from '../../assets/team/dreadful.png';
import blackglitterImage from '../../assets/team/blackglitter.jpg';
import shiftyImage from '../../assets/team/shifty.webp';
import internalImage from '../../assets/team/internalError.webp';
const TeamMembers = () => {

  const teamMembersData = [
    {
      imageUrl: himorasiImage,
      title: '@himorazi',
      description: 'frontend and other wizardry',
      twitter: "https://twitter.com/himorazi"
    },
    {
      imageUrl: blackglitterImage,
      title: '@StefanBraunovic',
      description: 'use case lead + frontend',
      twitter: "https://twitter.com/StefanBraunovic"
    },
    {
      imageUrl: morinduneImage,
      title: '@morindune',
      description: 'frontend lead & other witchcraft',
      twitter: "https://twitter.com/morindune"
    },
    {
      imageUrl: shiftyImage,
      title: '@shifty_',
      description: 'frontend & spells',
      twitter: "https://twitter.com/shnifty_"
    },
    {
      imageUrl: dreadfulImage,
      title: '@dreadful-dev',
      description: 'dark magic practitioner',
      twitter: "https://twitter.com/dreadful_dev"
    },
    {
      imageUrl: internalImage,
      title: '@TheTruePhilippB',
      description: 'enchanting wordsmith',
      twitter: "https://twitter.com/TheTruePhilippB"
    },
  ];

  return (
    <div className={styles.teamMembersContainer}>
      {teamMembersData.map((item, index) => (
        <a key={index} href={item.twitter} target="_blank" rel="noreferrer" className={styles.teamMemberItem}>
          <img
            src={item.imageUrl}
            alt={item.title}
            className={styles.roundedImage}
          />
          <div className={styles.teamMemberText}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default TeamMembers;
