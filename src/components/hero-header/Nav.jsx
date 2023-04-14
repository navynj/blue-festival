import React from 'react';
import styles from '../../styles/hero-header/Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#time-table">Time Table</a>
        </li>
        <li>
          <a href="#tickets">Tickets</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
