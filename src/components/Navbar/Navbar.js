// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/O">OP</Link>
      <Link to="/CAT">CAT</Link>
      <Link to="/OP_CAT">OP_CAT</Link>
    </div>
  );
};

export default Navbar;
