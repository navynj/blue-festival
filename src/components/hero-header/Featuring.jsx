import React from 'react';
import styles from '../../styles/hero-header/Featuring.module.css';

const Featuring = () => {
  return (
    <section>
      <h3>Featuring</h3>
      <ul>
        <li>
          <div>
            <img style={{ width: '5rem' }} src="/images/blue-paint-1.png" />
            <h6>Cerulean</h6>
            <p>Cerulean Skies</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Featuring;
