import React from 'react';
import styles from '../../styles/hero-header/Featuring.module.css';
import { featuringList } from '../../data/hero';

const Featuring = () => {
  return (
    <section className={styles.container}>
      <h5>Featuring</h5>
      <ul>
        {featuringList.map((item, i) => (
          <li key={i}>
            <div className={styles.imgHolder}>
              <img src={item.img} />
            </div>
            <h6>{item.name}</h6>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Featuring;
