// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import catIcon from '../../assets/images/cat.svg';
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
        <Link to="/CAT">CAT</Link>
        <Link to="/OP_CAT">OP_CAT</Link>
        <Link to="/FEED_CAT">FEED_CAT</Link>
        <Link to="/VOTE">VOTE_CAT</Link>
      </div></>
  );
};

export default Navbar;
