// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import catIcon from '../../assets/images/cat.svg';
import twitter from '../../assets/images/twitter.svg';
import gitHub from '../../assets/images/github.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            className="catIcon"
            src={catIcon}
            alt="OP Cat"
            style={{ width: '50px' }}
          />
        </Link>
      </div>
      <div className={styles.menu}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
        </div>
        <ul className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          <li>
            <Link to="/OP">OP_FLOW</Link>
          </li>
          <li>
            <Link to="/OPCAT">OP_CAT</Link>
          </li>
          <li>
            <Link to="/FEED_CAT">FEED_CAT</Link>
          </li>
          <li>
            <Link to="/OP_CAT_SMART">OP_CAT_SMART</Link>
          </li>
          <li>
            <Link to="/ARTICLE">OP_ARTICLE</Link>
            </li>
            <li>
            <Link to="/VOTE">VOTE_CAT</Link>
          </li>
          <li>
            <a className={styles.someLink} href="https://github.com/StefanBraunovic/OP_CAT" target="_blank">
              <img className="some" src={gitHub} alt="OP Cat" style={{ width: '30px' }} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/OperationDedCat" target="_blank">
              <img className="some" src={twitter} alt="OP Cat" style={{ width: '30px' }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;