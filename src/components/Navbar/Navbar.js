// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import catIcon from '../../assets/images/cat.svg';
import twitter from '../../assets/images/twitter.svg';
import gitHub from '../../assets/images/github.svg';
const Navbar = () => {
  return (
    <><div className={styles.navbar}>
<Link to="/">
      <img
        className='catIcon'
        src={catIcon}
        alt="OP Cat"
        style={{ width: '50px',  display: 'inline-block', top:'10px' }}
         />
    </Link>
        <Link to="/OP">OP</Link>
        <Link to="/CONTENT">CONTENT</Link>
        <Link to="/OP_CAT">OP_CAT</Link>
        <Link to="/FEED_CAT">FEED_CAT</Link>
        <Link className={styles.someLink} to="https://github.com/StefanBraunovic/OP_CAT">
        <img
        className='some'
        src={gitHub}
        alt="OP Cat"
        style={{ width: '30px',  display: 'inline-block', top:'10px'  }}
         />
        </Link>
        <Link to="https://github.com/StefanBraunovic/OP_CAT">
        <img
        className='some'
        src={twitter}
        alt="OP Cat"
        style={{ width: '30px',  display: 'inline-block', top:'10px' }}
         />
        </Link>
      </div></>
  );
};

export default Navbar;
