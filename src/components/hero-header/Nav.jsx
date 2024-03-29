import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul className="flex-row text-2xl">
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
